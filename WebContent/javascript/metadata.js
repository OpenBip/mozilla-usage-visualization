var xxxxxxxxxx = [
                    { cat1: "gender", subCat1: "1", cat2: "age", subCat2: "0", percent: 0.5 },
                    { cat1: "gender", subCat1: "1", cat2: "age", subCat2: "1", percent: 0.1 },
                    { cat1: "gender", subCat1: "1", cat2: "age", subCat2: "2", percent: 0.2 },
                    { cat1: "gender", subCat1: "1", cat2: "age", subCat2: "4", percent: 0.2 },
                    
                    { cat1: "gender", subCat1: "0", cat2: "age", subCat2: "3", percent: 0.6 },
                    { cat1: "gender", subCat1: "0", cat2: "age", subCat2: "5", percent: 0.4 },
                  ];

var xxxxx = {
    gender: { name: "Gender", active: true,
      categories: [
        { name: "Male", color: "rgba(0, 0, 255, 0.1)", bottom: 180, height: 240 },
        { name: "Female", color: "rgba(255, 0, 0, 0.1)", bottom: 0, height: 120 }
        
      ]
    },
    age: { name: "Age", active: true,
      categories: [
        { name: "<18", color: "rgba(255, 0, 0, 0.4)", bottom: 0, height: 60 },
        { name: "18-25", color: "rgba(100, 100, 0, 0.4)", bottom: 72, height: 60 },
        { name: "26-35", color: "rgba(0, 255, 0, 0.4)", bottom: 144, height: 60 },
        { name: "36-45", color: "rgba(0, 0, 255, 0.4)", bottom: 216, height: 60 },
        { name: "46-55", color: "rgba(0, 100, 100, 0.4)", bottom: 288, height: 60 },
        { name: ">55", color: "rgba(100, 100, 100, 0.4)", bottom: 360, height: 60 }
      ]
    },
    skillLevel: { name: "Skill Level", active: true,
      categories: [
        { name: "Low", color: "rgba(255, 0, 0, 0.4)", bottom: 0, height: 130 },
        { name: "Med", color: "rgba(255, 255, 0, 0.4)", bottom: 145, height: 130 },
        { name: "High", color: "rgba(0, 255, 0, 0.4)", bottom: 290, height: 130 }
      ]
    }
};

var coordinates = {
  sesTotal: { name: "Session Avg", active: false, order: 0 },
  sesPrivate: { name: "Private Session Avg", active: false, order: 1 },
  sesActive: { name: "Active Session Avg", active: false, order: 2 },
  avgBookmarks: { name: "Avg Bookmarks", active: true, order: 3 },
  avgBookmarkFolders: { name: "Avg Bookmark Folders", active: true, order: 4 },
  avgBookmarkDepth: { name: "Avg Bookmark Folder Depth", active: true, order: 5 },
  avgTabs: { name: "Avg Tabs", active: true, order: 6 },
  avgWindows: { name: "Avg Windows", active: true, order: 6 }
};
