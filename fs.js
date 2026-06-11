// fs.js
const FS = {
    drives: {
        "C:": {
            name: "C:",
            volumeLabeL: "LocalMachine",
            type: "dir",
            children: {
                "WINDOWS": {
                    name: "Windows",
                    type: "dir",
                    creationTime: Date.now(),
                    lastModified: Date.now(),
                    attrs: 0b0000,
                    children: {
                        "DESKTOP": {
                            name: "Desktop",
                            type: "dir",
                            creationTime: Date.now(),
                            lastModified: Date.now(),
                            attrs: 0b0000,
                            children: {}
                        }
                    }
                }
            }
        }
    }
}