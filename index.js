const electron = require ("electron");

const {

    app, 
    BrowserWindow, 
    Menu,
    ipcMain
}= electron;

let todayWindow;
let hitungWindow;
let hitungduaWindow;
let hitungtigaWindow;
let hitungempatWindow;
let hitunglimaWindow;
let hitungenamWindow;


app.on("ready",() => {
    todayWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration : true 
        },
        title : "Calculator Ajaib"
        
    });

    todayWindow.loadURL(`file://${__dirname}/today.html`);
    todayWindow.on("closed", () =>{

        app.quit();
        todayWindow = null;
    });

    const mainMenu = Menu.buildFromTemplate(MenuTemplate);
    Menu.setApplicationMenu(mainMenu);
});

const hitungWindowCreator = () => {
    hitungWindow = new BrowserWindow ({
        webPreferences:{
            nodeIntegration : true
        },
        width: 600,
        height: 400,
        title: "perhitungan 1"
    });

    hitungWindow.setMenu(null);
    hitungWindow.loadURL(`file://${__dirname}/jajargenjang.html`);
    hitungWindow.on("closed", () => (hitungWindow = null))
};

const hitungduaWindowCreator = () => {
    hitungduaWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration : true
        },
        width : 600,
        height : 400,
        title: "perhitungan 2"
    });
    hitungduaWindow.setMenu(null);
    hitungduaWindow.loadURL(`file://${__dirname}/tabung.html`);
    hitungduaWindow.on("closed",() => (hitungduaWindow = null));
};

const hitungtigaWindowCreator = () => {
    hitungtigaWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration : true
        },
        width : 600,
        height : 400,
        title: "perhitungan 3"
    });
    hitungtigaWindow.setMenu(null);
    hitungtigaWindow.loadURL(`file://${__dirname}/prismasegitiga.html`);
    hitungtigaWindow.on("closed",() => (hitungtigaWindow = null));
};

const hitungempatWindowCreator = () => {
    hitungempatWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration : true
        },
        width : 600,
        height : 400,
        title: "perhitungan 4"
    });
    hitungempatWindow.setMenu(null);
    hitungempatWindow.loadURL(`file://${__dirname}/kerucut.html`);
    hitungempatWindow.on("closed",() => (hitungempatWindow = null));
};

const hitunglimaWindowCreator = () => {
    hitunglimaWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration : true
        },
        width : 600,
        height : 400,
        title: "perhitungan 5"
    });
    hitunglimaWindow.setMenu(null);
    hitunglimaWindow.loadURL(`file://${__dirname}/kubus.html`);
    hitunglimaWindow.on("closed",() => (hitunglimaWindow = null));
};

const hitungenamWindowCreator = () => {
    hitungenamWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration : true
        },
        width : 600,
        height : 400,
        title: "perhitungan 6"
    });
    hitungenamWindow.setMenu(null);
    hitungenamWindow.loadURL(`file://${__dirname}/kelilingJG.html`);
    hitungenamWindow.on("closed",() => (hitungenamWindow = null));
}
const MenuTemplate = [{
    label : "pilih",
    submenu : [{
        label : "1. Luas Jajar Genjang",
        click(){
            hitungWindowCreator();
        }
    },
    {
        label : "2. Luas Tabung",
        click(){
            hitungduaWindowCreator();
    }},
    {
        label : "3. Prisma Segitiga",
        click(){
            hitungtigaWindowCreator();
    }},
    {
        label : "4. Luas Kerucut",
        click(){
            hitungempatWindowCreator();
    }},
    {
        label : "5. Luas Kubus",
        click(){
            hitunglimaWindowCreator();
    }},
    {
        label : "6. Keliling jajar genjang",
        click(){
            hitungenamWindowCreator();
    }
    }]
}]