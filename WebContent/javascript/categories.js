var TOTAL_USERS = 3917;

var categories = {
    gender: {
      name: "Gender",
      active: true,
      order: 1,
      
      valueMap: {
        0: "male",
        1: "female"
      },
      
      prev_category: "",

      num_sub_categories: 2,
      sub_categories: {
        male: {
          name: "Male",
          color_lines: "rgba(0, 0, 255, 0.1)",
          color_bar: "rgba(0, 0, 255, 0.6)",
          color_inactive: "rgba(200, 200, 200, 0.4)",
          
          height: -1,
          bottom: -1,
          
          portion_of: {
            all: { numUsers: 3665 },

            age_under_18: { numUsers: 413 },
            age_between_18_25: { numUsers: 1303 },
            age_between_26_35: { numUsers: 1060 },
            age_between_36_45: { numUsers: 481 },
            age_between_46_55: { numUsers: 232 },
            age_over_55: { numUsers: 176 },
            
            skill_low: { numUsers: 123 },
            skill_med: { numUsers: 1005 },
            skill_high: { numUsers: 2537 },
            
            age_under_18_skill_low: { numUsers: 21 },
            age_between_18_25_skill_low: { numUsers: 40 },
            age_between_26_35_skill_low: { numUsers: 30 },
            age_between_36_45_skill_low: { numUsers: 15 },
            age_between_46_55_skill_low: { numUsers: 11 },
            age_over_55_skill_low: { numUsers: 7 },
            age_under_18_skill_med: { numUsers: 129 },
            age_between_18_25_skill_med: { numUsers: 360 },
            age_between_26_35_skill_med: { numUsers: 223 },
            age_between_36_45_skill_med: { numUsers: 128 },
            age_between_46_55_skill_med: { numUsers: 86 },
            age_over_55_skill_med: { numUsers: 79 },
            age_under_18_skill_high: { numUsers: 263 },
            age_between_18_25_skill_high: { numUsers: 903 },
            age_between_26_35_skill_high: { numUsers: 807 },
            age_between_36_45_skill_high: { numUsers: 338 },
            age_between_46_55_skill_high: { numUsers: 135 },
            age_over_55_skill_high: { numUsers: 91 },
            
            skill_low_age_under_18: { numUsers: 21 },
            skill_low_age_between_18_25: { numUsers: 40 },
            skill_low_age_between_26_35: { numUsers: 30 },
            skill_low_age_between_36_45: { numUsers: 15 },
            skill_low_age_between_46_55: { numUsers: 11 },
            skill_low_age_over_55: { numUsers: 7 },
            skill_med_age_under_18: { numUsers: 129 },
            skill_med_age_between_18_25: { numUsers: 360 },
            skill_med_age_between_26_35: { numUsers: 223 },
            skill_med_age_between_36_45: { numUsers: 128 },
            skill_med_age_between_46_55: { numUsers: 86 },
            skill_med_age_over_55: { numUsers: 79 },
            skill_high_age_under_18: { numUsers: 263 },
            skill_high_age_between_18_25: { numUsers: 903 },
            skill_high_age_between_26_35: { numUsers: 807 },
            skill_high_age_between_36_45: { numUsers: 338 },
            skill_high_age_between_46_55: { numUsers: 135 },
            skill_high_age_over_55: { numUsers: 91 }
          }
        },
        female: {
          name: "Female",
          color_lines: "rgba(255, 0, 0, 0.5)",
          color_bar: "rgba(255, 0, 0, 0.5)",
          color_inactive: "rgba(200, 200, 200, 0.4)",
          
          height: -1,
          bottom: -1,

          portion_of: {
            all: { numUsers: 252 },

            age_under_18: { numUsers: 26 },
            age_between_18_25: { numUsers: 83 },
            age_between_26_35: { numUsers: 58 },
            age_between_36_45: { numUsers: 37 },
            age_between_46_55: { numUsers: 28 },
            age_over_55: { numUsers: 20 },
            
            skill_low: { numUsers: 30 },
            skill_med: { numUsers: 119 },
            skill_high: { numUsers: 103 },
            
            age_under_18_skill_low: { numUsers: 1 },
            age_between_18_25_skill_low: { numUsers: 7 },
            age_between_26_35_skill_low: { numUsers: 3 },
            age_between_36_45_skill_low: { numUsers: 3 },
            age_between_46_55_skill_low: { numUsers: 9 },
            age_over_55_skill_low: { numUsers: 7 },
            age_under_18_skill_med: { numUsers: 13 },
            age_between_18_25_skill_med: { numUsers: 40 },
            age_between_26_35_skill_med: { numUsers: 31 },
            age_between_36_45_skill_med: { numUsers: 16 },
            age_between_46_55_skill_med: { numUsers: 8 },
            age_over_55_skill_med: { numUsers: 11 },
            age_under_18_skill_high: { numUsers: 12 },
            age_between_18_25_skill_high: { numUsers: 36 },
            age_between_26_35_skill_high: { numUsers: 24 },
            age_between_36_45_skill_high: { numUsers: 18 },
            age_between_46_55_skill_high: { numUsers: 11 },
            age_over_55_skill_high: { numUsers: 2 },
            
            skill_low_age_under_18: { numUsers: 1 },
            skill_low_age_between_18_25: { numUsers: 7 },
            skill_low_age_between_26_35: { numUsers: 3 },
            skill_low_age_between_36_45: { numUsers: 3 },
            skill_low_age_between_46_55: { numUsers: 9 },
            skill_low_age_over_55: { numUsers: 7 },
            skill_med_age_under_18: { numUsers: 13 },
            skill_med_age_between_18_25: { numUsers: 40 },
            skill_med_age_between_26_35: { numUsers: 31 },
            skill_med_age_between_36_45: { numUsers: 16 },
            skill_med_age_between_46_55: { numUsers: 8 },
            skill_med_age_over_55: { numUsers: 11 },
            skill_high_age_under_18: { numUsers: 12 },
            skill_high_age_between_18_25: { numUsers: 36 },
            skill_high_age_between_26_35: { numUsers: 24 },
            skill_high_age_between_36_45: { numUsers: 18 },
            skill_high_age_between_46_55: { numUsers: 11 },
            skill_high_age_over_55: { numUsers: 2 }
          }
        }
      }
    },
    
    age: {
      name: "Age Group",
      active: true,
      order: 0,
      
      valueMap: {
          0: "under_18",
          1: "between_18_25",
          2: "between_26_35",
          3: "between_36_45",
          4: "between_46_55",
          5: "over_55"
      },
      
      prev_category: "",

      num_sub_categories: 6,
      sub_categories: {
        under_18: {
          name: "<18",
          color_lines: "rgba(153, 255, 0, 0.1)",
          color_bar: "rgba(153, 255, 0, 0.6)",
          color_inactive: "rgba(200, 200, 200, 0.4)",
          
          height: -1,
          bottom: -1,

          portion_of: {
            all: { numUsers: 439 },
            
            gender_male: { numUsers: 413 },
            gender_female: { numUsers: 26 },
            
            skill_low: { numUsers: 22 },
            skill_med: { numUsers: 142 },
            skill_high: { numUsers: 275 },
            
            skill_low_gender_male: { numUsers: 21 },
            skill_low_gender_female: { numUsers: 1 },
            skill_med_gender_male: { numUsers: 129 },
            skill_med_gender_female: { numUsers: 13 },
            skill_high_gender_male: { numUsers: 263 },
            skill_high_gender_female: { numUsers: 12 },

            gender_male_skill_low: { numUsers: 21 },
            gender_female_skill_low: { numUsers: 1 },
            gender_male_skill_med: { numUsers: 129 },
            gender_female_skill_med: { numUsers: 13 },
            gender_male_skill_high: { numUsers: 263 },
            gender_female_skill_high: { numUsers: 12 }
          }
        },
        between_18_25: {
          name: "18-25",
          color_lines: "rgba(0, 255, 153, 0.1)",
          color_bar: "rgba(0, 255, 153, 0.6)",
          color_inactive: "rgba(200, 200, 200, 0.4)",
          
          height: -1,
          bottom: -1,

          portion_of: {
            all: { numUsers: 1386 },
            
            gender_male: { numUsers: 1303 },
            gender_female: { numUsers: 83 },
            
            skill_low: { numUsers: 47 },
            skill_med: { numUsers: 400 },
            skill_high: { numUsers: 939 },
            
            skill_low_gender_male: { numUsers: 40 },
            skill_low_gender_female: { numUsers: 7 },
            skill_med_gender_male: { numUsers: 360 },
            skill_med_gender_female: { numUsers: 40 },
            skill_high_gender_male: { numUsers: 903 },
            skill_high_gender_female: { numUsers: 36 },

            gender_male_skill_low: { numUsers: 40 },
            gender_female_skill_low: { numUsers: 7 },
            gender_male_skill_med: { numUsers: 360 },
            gender_female_skill_med: { numUsers: 40 },
            gender_male_skill_high: { numUsers: 903 },
            gender_female_skill_high: { numUsers: 36 }
          }
        },
        between_26_35: {
          name: "26-25",
          color_lines: "rgba(0, 153, 255, 0.1)",
          color_bar: "rgba(0, 153, 255, 0.6)",
          color_inactive: "rgba(200, 200, 200, 0.4)",
          
          height: -1,
          bottom: -1,

          portion_of: {
            all: { numUsers: 1118 },
            
            gender_male: { numUsers: 1060 },
            gender_female: { numUsers: 58 },
            
            skill_low: { numUsers: 33 },
            skill_med: { numUsers: 254 },
            skill_high: { numUsers: 831 },
            
            skill_low_gender_male: { numUsers: 30 },
            skill_low_gender_female: { numUsers: 3 },
            skill_med_gender_male: { numUsers: 223 },
            skill_med_gender_female: { numUsers: 31 },
            skill_high_gender_male: { numUsers: 807 },
            skill_high_gender_female: { numUsers: 24 },

            gender_male_skill_low: { numUsers: 30 },
            gender_female_skill_low: { numUsers: 3 },
            gender_male_skill_med: { numUsers: 223 },
            gender_female_skill_med: { numUsers: 31 },
            gender_male_skill_high: { numUsers: 807 },
            gender_female_skill_high: { numUsers: 24 }
          }
        },
        between_36_45: {
          name: "36-45",
          color_lines: "rgba(153, 0, 255, 0.1)",
          color_bar: "rgba(153, 0, 255, 0.6)",
          color_inactive: "rgba(200, 200, 200, 0.4)",
          
          height: -1,
          bottom: -1,

          portion_of: {
            all: { numUsers: 518 },
            
            gender_male: { numUsers: 481 },
            gender_female: { numUsers: 37 },
            
            skill_low: { numUsers: 18 },
            skill_med: { numUsers: 144 },
            skill_high: { numUsers: 356 },
            
            skill_low_gender_male: { numUsers: 15 },
            skill_low_gender_female: { numUsers: 3 },
            skill_med_gender_male: { numUsers: 128 },
            skill_med_gender_female: { numUsers: 16 },
            skill_high_gender_male: { numUsers: 338 },
            skill_high_gender_female: { numUsers: 18 },

            gender_male_skill_low: { numUsers: 15 },
            gender_female_skill_low: { numUsers: 3 },
            gender_male_skill_med: { numUsers: 128 },
            gender_female_skill_med: { numUsers: 16 },
            gender_male_skill_high: { numUsers: 338 },
            gender_female_skill_high: { numUsers: 18 }
          }
        },
        between_46_55: {
          name: "46-55",
          color_lines: "rgba(255, 0, 153, 0.1)",
          color_bar: "rgba(255, 0, 153, 0.6)",
          color_inactive: "rgba(200, 200, 200, 0.4)",
          
          height: -1,
          bottom: -1,

          portion_of: {
            all: { numUsers: 260 },
            
            gender_male: { numUsers: 232 },
            gender_female: { numUsers: 28 },
            
            skill_low: { numUsers: 20 },
            skill_med: { numUsers: 94 },
            skill_high: { numUsers: 146 },
            
            skill_low_gender_male: { numUsers: 11 },
            skill_low_gender_female: { numUsers: 9 },
            skill_med_gender_male: { numUsers: 86 },
            skill_med_gender_female: { numUsers: 8 },
            skill_high_gender_male: { numUsers: 135 },
            skill_high_gender_female: { numUsers: 11 },

            gender_male_skill_low: { numUsers: 11 },
            gender_female_skill_low: { numUsers: 9 },
            gender_male_skill_med: { numUsers: 86 },
            gender_female_skill_med: { numUsers: 8 },
            gender_male_skill_high: { numUsers: 135 },
            gender_female_skill_high: { numUsers: 11 }
          }
        },
        over_55: {
          name: ">55",
          color_lines: "rgba(255, 153, 0, 0.4)",
          color_bar: "rgba(255, 153, 100, 0.6)",
          color_inactive: "rgba(200, 200, 200, 0.4)",
          
          height: -1,
          bottom: -1,

          portion_of: {
            all: { numUsers: 196 },
            
            gender_male: { numUsers: 176 },
            gender_female: { numUsers: 20 },
            
            skill_low: { numUsers: 13 },
            skill_med: { numUsers: 90 },
            skill_high: { numUsers: 93 },
            
            skill_low_gender_male: { numUsers: 6 },
            skill_low_gender_female: { numUsers: 7 },
            skill_med_gender_male: { numUsers: 79 },
            skill_med_gender_female: { numUsers: 11 },
            skill_high_gender_male: { numUsers: 91 },
            skill_high_gender_female: { numUsers: 2 },

            gender_male_skill_low: { numUsers: 6 },
            gender_female_skill_low: { numUsers: 7 },
            gender_male_skill_med: { numUsers: 79 },
            gender_female_skill_med: { numUsers: 11 },
            gender_male_skill_high: { numUsers: 91 },
            gender_female_skill_high: { numUsers: 2 }
          }
        }
      }
    },
    
    skill: {
      name: "Web Skill",
      active: false,
      order: 2,
      
      valueMap: {
          0: "low",
          1: "low",
          2: "low",
          3: "low",
          4: "low",
          5: "med",
          6: "med",
          7: "med",
          8: "high",
          9: "high",
          10: "high"
      },

      num_sub_categories: 3,
      sub_categories: {
        low: {
          name: "Low",
          color_lines: "rgba(255, 153, 0, 0.1)",
          color_bar: "rgba(255, 153, 0, 0.6)",
          color_inactive: "rgba(200, 200, 200, 0.4)",
          
          height: -1,
          bottom: -1,
          
          portion_of: {
            all: { numUsers: 153 },
            
            age_under_18: { numUsers: 22 },
            age_between_18_25: { numUsers: 47 },
            age_between_26_35: { numUsers: 33 },
            age_between_36_45: { numUsers: 18 },
            age_between_46_55: { numUsers: 20 },
            age_over_55: { numUsers: 13 },
            
            gender_male: { numUsers: 123 },
            gender_female: { numUsers: 30 },

            age_under_18_gender_male: { numUsers: 21 },
            age_under_18_gender_female: { numUsers: 1 },
            age_between_18_25_gender_male: { numUsers: 40 },
            age_between_18_25_gender_female: { numUsers: 7 },
            age_between_26_35_gender_male: { numUsers: 30 },
            age_between_26_35_gender_female: { numUsers: 3 },
            age_between_36_45_gender_male: { numUsers: 15 },
            age_between_36_45_gender_female: { numUsers: 3 },
            age_between_46_55_gender_male: { numUsers: 11 },
            age_between_46_55_gender_female: { numUsers: 9 },
            age_over_55_gender_male: { numUsers: 6 },
            age_over_55_gender_female: { numUsers: 7 },
            
            gender_male_age_under_18: { numUsers: 21 },
            gender_female_age_under_18: { numUsers: 1 },
            gender_male_age_between_18_25: { numUsers: 40 },
            gender_female_age_between_18_25: { numUsers: 7 },
            gender_male_age_between_26_35: { numUsers: 30 },
            gender_female_age_between_26_35: { numUsers: 3 },
            gender_male_age_between_36_45: { numUsers: 15 },
            gender_female_age_between_36_45: { numUsers: 3 },
            gender_male_age_between_46_55: { numUsers: 11 },
            gender_female_age_between_46_55: { numUsers: 9 },
            gender_male_age_over_55: { numUsers: 6 },
            gender_female_age_over_55: { numUsers: 7 }
          }
        },
        med: {
          name: "Med",
          color_lines: "rgba(0, 255, 153, 0.1)",
          color_bar: "rgba(0, 255, 153, 0.6)",
          color_inactive: "rgba(200, 200, 200, 0.4)",
          
          height: -1,
          bottom: -1,
          
          portion_of: {
            all: { numUsers: 1124 },
            
            age_under_18: { numUsers: 142 },
            age_between_18_25: { numUsers: 400 },
            age_between_26_35: { numUsers: 254 },
            age_between_36_45: { numUsers: 144 },
            age_between_46_55: { numUsers: 94 },
            age_over_55: { numUsers: 90 },
            
            gender_male: { numUsers: 1005 },
            gender_female: { numUsers: 119 },
            
            age_under_18_gender_male: { numUsers: 129 },
            age_under_18_gender_female: { numUsers: 13 },
            age_between_18_25_gender_male: { numUsers: 360 },
            age_between_18_25_gender_female: { numUsers: 40 },
            age_between_26_35_gender_male: { numUsers: 223 },
            age_between_26_35_gender_female: { numUsers: 31 },
            age_between_36_45_gender_male: { numUsers: 128 },
            age_between_36_45_gender_female: { numUsers: 16 },
            age_between_46_55_gender_male: { numUsers: 86 },
            age_between_46_55_gender_female: { numUsers: 8 },
            age_over_55_gender_male: { numUsers: 79 },
            age_over_55_gender_female: { numUsers: 11 },
            
            gender_male_age_under_18: { numUsers: 129 },
            gender_female_age_under_18: { numUsers: 13 },
            gender_male_age_between_18_25: { numUsers: 360 },
            gender_female_age_between_18_25: { numUsers: 40 },
            gender_male_age_between_26_35: { numUsers: 223 },
            gender_female_age_between_26_35: { numUsers: 31 },
            gender_male_age_between_36_45: { numUsers: 128 },
            gender_female_age_between_36_45: { numUsers: 16 },
            gender_male_age_between_46_55: { numUsers: 86 },
            gender_female_age_between_46_55: { numUsers: 8 },
            gender_male_age_over_55: { numUsers: 79 },
            gender_female_age_over_55: { numUsers: 11 }
          }
        },
        high: {
          name: "High",
          color_lines: "rgba(153, 0, 255, 0.1)",
          color_bar: "rgba(153, 0, 255, 0.6)",
          color_inactive: "rgba(200, 200, 200, 0.4)",
          
          height: -1,
          bottom: -1,
          
          portion_of: {
            all: { numUsers: 2640 },
            
            age_under_18: { numUsers: 275 },
            age_between_18_25: { numUsers: 939 },
            age_between_26_35: { numUsers: 831 },
            age_between_36_45: { numUsers: 356 },
            age_between_46_55: { numUsers: 146 },
            age_over_55: { numUsers: 93 },
            
            gender_male: { numUsers: 2537 },
            gender_female: { numUsers: 103 },
            
            age_under_18_gender_male: { numUsers: 264 },
            age_under_18_gender_female: { numUsers: 12 },
            age_between_18_25_gender_male: { numUsers: 903 },
            age_between_18_25_gender_female: { numUsers: 36 },
            age_between_26_35_gender_male: { numUsers: 807 },
            age_between_26_35_gender_female: { numUsers: 24 },
            age_between_36_45_gender_male: { numUsers: 338 },
            age_between_36_45_gender_female: { numUsers: 18 },
            age_between_46_55_gender_male: { numUsers: 135 },
            age_between_46_55_gender_female: { numUsers: 11 },
            age_over_55_gender_male: { numUsers: 91 },
            age_over_55_gender_female: { numUsers: 2 },
            
            gender_male_age_under_18: { numUsers: 264 },
            gender_female_age_under_18: { numUsers: 12 },
            gender_male_age_between_18_25: { numUsers: 903 },
            gender_female_age_between_18_25: { numUsers: 36 },
            gender_male_age_between_26_35: { numUsers: 807 },
            gender_female_age_between_26_35: { numUsers: 24 },
            gender_male_age_between_36_45: { numUsers: 338 },
            gender_female_age_between_36_45: { numUsers: 18 },
            gender_male_age_between_46_55: { numUsers: 135 },
            gender_female_age_between_46_55: { numUsers: 11 },
            gender_male_age_over_55: { numUsers: 91 },
            gender_female_age_over_55: { numUsers: 2 }
          }
        }
      }
    }
};