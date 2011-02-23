/**
 * @class Visualization
 */
dojo.declare("Visualization", null, {
  /*
   * Properties
   */
  rootPanel: null,
  width: 1100, height: 650, left: 30, right: 30, top: 30, bottom: 20,
  TOT_GAP_SIZE: 50,

  current_parallel_sets: [],

  /*
   * Functions
   */
  constructor: function() { },

  setupRootPanel: function() {
    var _this = this;
    this.rootPanel = new pv.Panel()
        .width(function() { return _this.width; })
        .height(function() { return _this.height; })
        .left(this.left).right(this.right).top(this.top).bottom(this.bottom);
    return this.rootPanel;
  },
  
  plotUserLines: function() {
    var _this = this;
    this.rootPanel.add(pv.Panel).data(data)
//    .visible(
//        function(datum) {
//          return _this.activeCoordinates.every(function(coord) {
//            var y = _this.axisY;
//            var filter = pv.dict(_this.activeCoordinates,
//                function(coord) {
//                  return {min: y[coord].domain()[0], max: y[coord].domain()[1]};
//                });
//            return (datum[coord] >= filter[coord].min) && (datum[coord] <= filter[coord].max);
//          })
//        })
        .add(pv.Line)
          .data(function() {
              return [ _this.activeCategories[_this.activeCategories.length - 1] ]
                .concat(_this.activeCoordinates);
          })
          .left(function(t, d) { return _this.axisX(t); })
          .bottom(function(t, d) { return _this.axisY[t](d[t]); })
          .strokeStyle(function(t, user) {
            var cat = categories[_this.activeCategories[0]];
            var subCat = cat.sub_categories[ cat.valueMap[ user[_this.activeCategories[0]] ] ];
            return subCat.color_lines;
          })
          .lineWidth(1)
          .antialias(true);
  },
  
  addCoordinateRuleLines: function() {
    var _this = this;
    this.rootPanel.add(pv.Rule).data(function() {
          return _this.activeCategories.concat(_this.activeCoordinates)
        })
        .left(function(key) { return _this.axisX(key); })
        .anchor("top")
        .add(pv.Label).top(-12).font("bold 10px sans-serif")
            .text(function(d) {
              if (categories[d]) return categories[d].name;
              if (coordinates[d]) return coordinates[d].name;
              return null;
            });
  },
  
  addDemographicCategories: function() {
    var _this = this;
    var categoryBars = this.parallelSets.add(pv.Bar)
        .data(function(category_label) {
          category = categories[category_label];
          if (! categories in category) {
            return [];
          }
          
          var returnData = [];
          for (sub_category_key in category.sub_categories) {
            var sub_category = category.sub_categories[sub_category_key];
            returnData.push( { subCat: sub_category,
              cat: category_label,
              last_cat: category.prev_category });
          }
          return returnData;
        })
        .left(function(d) { return _this.axisX(d.cat) - 5; })
        .width(10)
        .event("click", function(d) {
          alert(d.subCat.portion_of["all"].numUsers + " users");
        })
        .strokeStyle("black").lineWidth(1)
        .height(function(d) { return d.subCat.height; })
        .bottom(function(d) { return d.subCat.bottom; })
        .fillStyle(function(d) {
          return d.cat == _this.activeCategories[0] ? d.subCat.color_bar : d.subCat.color_inactive;
        });
    categoryBars.anchor("right").add(pv.Label)
        .text(function(d) { return d.subCat.name; });
  },
  
  findPercentage: function(path, target_sub_category) {
    var pathProperty = path[0].category + "_" + path[0].sub_category;
    for (var i = 1; i < path.length; ++i) {
      pathProperty += "_" + path[i].category + "_" + path[i].sub_category;
    }
    if (! (pathProperty in target_sub_category.portion_of)) {
      return 0;
    }
    
    var numUsers = target_sub_category.portion_of[pathProperty].numUsers;
    var outOf = categories[path[path.length - 1].category]
        .sub_categories[path[path.length - 1].sub_category].portion_of.all.numUsers;
    return numUsers / outOf;
  },
  
  hideParallelSets: function() {
    for (var i = 0; i < this.current_parallel_sets.length; ++i) {
      this.current_parallel_sets[i].data([]);
    }
    this.current_parallel_sets = [];
  },
  
  drawParallelSets: function(path) {
    // If our path-length is the same as the number of active categories,
    //   we've gone as far as we can.
    if (path.length == this.activeCategories.length) {
      return;
    }
    
    // The color of the beam is the color of the source (leftmost) sub-category
    var color = categories[path[0].category].sub_categories[path[0].sub_category].color_bar;

    var source_category_key = path[path.length - 1].category;
    var source_category = categories[source_category_key];
    var source_sub_category_key = path[path.length - 1].sub_category;
    var source_sub_category = source_category.sub_categories[source_sub_category_key];
    var _this = this;

    // Otherwise, draw parallel sets to next set of sub-categories
    var target_category_key = this.activeCategories[path.length];
    var target_category = categories[this.activeCategories[path.length]];
    for (sub_category_key in target_category.sub_categories) {
      var target_sub_category = target_category.sub_categories[sub_category_key];
      
      // Draw the area
      var area_height = this.findPercentage(path, target_sub_category) //target_sub_category.portion_of[ source_category_key ][ source_sub_category_key ].percent
          * source_sub_category.height;
      var newArea = this.rootPanel.add(pv.Area).data(
          [ source_sub_category.bottom + source_sub_category.current_parallel_set_offset_right,
            target_sub_category.bottom + target_sub_category.current_parallel_set_offset_left ])
        .left(function () {
          return this.index == 0 ? _this.axisX(source_category_key)
              : _this.axisX(target_category_key);
        })
        .bottom(function (bottom) { return bottom; })
        .strokeStyle("black").lineWidth(0)
        .fillStyle(color)
        .height(area_height);
      this.current_parallel_sets.push(newArea);
      
      source_sub_category.current_parallel_set_offset_right += area_height;
      target_sub_category.current_parallel_set_offset_left += area_height;

      // Continue recursion
      this.drawParallelSets(path.concat(
          [ { category: this.activeCategories[path.length],
              sub_category: sub_category_key } ]
        ));
    }
  },
  
  addParallelSets: function() {
    // Finding the leftmost category
    var leftmost_category = categories[this.activeCategories[0]];
    
    // Iterating through each sub_category of the left-most category
    for (leftmost_sub_cat_key in leftmost_category.sub_categories) {
      // Recursive call to draw the beams from this sub-category
      this.drawParallelSets([ { category: this.activeCategories[0],
                                sub_category: leftmost_sub_cat_key } ]);  
    }
  },
  
  updateCategoryBarProperties: function() {
    for (category_key in categories) {
      var category = categories[category_key];
      if (! category.active) {
        continue;
      }
      
      var categoryIndex = this.axisX.domain().indexOf(category_key);
      var lastCategory;
      if (categoryIndex == 0) {
        lastCategory = "all";
      } else {
        lastCategory = this.axisX.domain()[categoryIndex - 1];
      }
      category.prev_category = lastCategory;
      
      var num_gaps = category.num_sub_categories - 1;
      var gap_size = this.TOT_GAP_SIZE / num_gaps;
      var height = this.height - this.TOT_GAP_SIZE;
      var currentBottom = 0;
      for (sub_category_key in category.sub_categories) {
        var sub_category = category.sub_categories[sub_category_key];
        sub_category.height = (sub_category.portion_of.all.numUsers / TOTAL_USERS) * height;
        sub_category.bottom = currentBottom;
        sub_category.current_parallel_set_offset_left = 0; // Initializing
        sub_category.current_parallel_set_offset_right = 0; // Initializing
        currentBottom += sub_category.height + gap_size;
      }
    }
  },

  /**
   * @function render
   * @returns
   */
  render: function() {
    /*
     * Visualization Preprocessing
     */
    var s1 = new Date();

    this.updateActiveCategories();
    this.updateActiveCoordinates();
    this.updateXAxis();
    this.updateCategoryBarProperties();
    this.updateYAxis();

    var s2 = new Date();
    console.debug("Pre-Processing Time: " + (s2.getTime() - s1.getTime()));


    /*
     * Building the Visualization
     */

    // Root panel
    this.setupRootPanel();
    this.plotUserLines();
    this.addCoordinateRuleLines();
    
    // Parallel Sets
    var _this = this;
    this.parallelSets = this.rootPanel.add(pv.Panel).data(function() {
      return _this.activeCategories;
    });
    this.addDemographicCategories();
    this.addParallelSets();
    
    /*
     * Rendering the visualization
     */
    var start = new Date();
    this.rootPanel.render();
    
    var end = new Date();
    console.debug("Visualization.render = " + (end.getTime() - start.getTime()));
  },
  
  updateActiveCoordinates: function() {
    var activeCoordinates = [];
    for (key in coordinates) {
      var coordinate = coordinates[key];
      if (coordinate.active) {
        activeCoordinates.push(key);
      }
    }
    this.activeCoordinates = activeCoordinates.sort(function(a, b) {
      if (coordinates[a].order < coordinates[b].order) {
        return -1;
      } else if (coordinates[a].order == coordinates[b].order) {
        return 0;
      }
      return 1;
    });
  },
  
  updateActiveCategories: function() {
    var activeCategories = [];
    for (key in categories) {
      var category = categories[key];
      if (category.active) {
        activeCategories.push(key);
      }
    }
    this.activeCategories = activeCategories.sort(function(a, b) {
      if (categories[a].order < categories[b].order) {
        return -1;
      } else if (categories[a].order == categories[b].order) {
        return 0;
      }
      return 1;
    });
  },
  
  updateXAxis: function() {
    this.axisX = pv.Scale
        .ordinal(this.activeCategories.concat(this.activeCoordinates))
        .splitFlush(0, this.width - 50);
  },
  
  updateYAxis: function() {
    var _this = this;
    this.axisY = pv.dict(
        [ this.activeCategories[this.activeCategories.length - 1] ]
            .concat(this.activeCoordinates),
        function(key) {
          if (_this.activeCategories.indexOf(key) > -1) {
            var category = categories[key];
            var cat_values = [];
            var bottom_pixels = [];
            for (cat_value in category.valueMap) {
              cat_values.push(cat_value);
              var sub_category = category.sub_categories[category.valueMap[cat_value]];
              bottom_pixels.push(sub_category.bottom + sub_category.height * 0.5);
            }
            var scale = pv.Scale.ordinal(cat_values).range(bottom_pixels);
            return pv.Scale.ordinal(cat_values).range(bottom_pixels);
          }
          return pv.Scale.linear(
              data.filter(function(datum) { return ! isNaN(datum[key]); }),
              function(datum) { return Math.floor(datum[key]) - 0.5; },
              function(datum) { return Math.ceil(datum[key]) + 0.5; })
            .range(0, _this.height);
        });
  },
  
  updateCoordinate: function(coordName, textboxID) {
    var value = document.getElementById(textboxID).value;
    if (value == "") {
      coordinates[coordName].active = false;
      return;
    }
    var order = parseInt(value);
    coordinates[coordName].active = true;
    coordinates[coordName].order = order;
    return;
  },
  
  updateCategory: function(catName, textboxID) {
    var value = document.getElementById(textboxID).value;
    if (value == "") {
      categories[catName].active = false;
      return;
    }
    var order = parseInt(value);
    categories[catName].active = true;
    categories[catName].order = order;
    return;
  },
  
  updateVisualization: function() {
    this.updateCategory("gender", "catGender");
    this.updateCategory("age", "catAge");
    this.updateCategory("skill", "catSkill");
    
//    this.updateCoordinate("sesTotal", "coordAvgSession");
//    this.updateCoordinate("sesPrivate", "coordAvgPrivate");
//    this.updateCoordinate("sesActive", "coordAvgActive");
    this.updateCoordinate("avgBookmarks", "avgNumBooks");
    this.updateCoordinate("avgBookmarkFolders", "avgNumBookFolders");
    this.updateCoordinate("avgBookmarkDepth", "avgBookDepth");
    this.updateCoordinate("avgTabs", "avgNumTabs");
    this.updateCoordinate("avgWindows", "avgNumWins");
    
    this.height = parseInt(document.getElementById("visHeight").value);
    this.width = parseInt(document.getElementById("visWidth").value);
    this.TOT_GAP_SIZE = parseInt(document.getElementById("visGap").value);
    
    this.updateActiveCategories();
    this.updateActiveCoordinates();
    this.updateXAxis();
    this.updateCategoryBarProperties();
    this.updateYAxis();
    this.hideParallelSets();
    this.addParallelSets();

    this.rootPanel.render();
  }
});