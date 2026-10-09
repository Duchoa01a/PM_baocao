const {app,BrowserWindow,Menu,shell}=require('electron');
const path=require('path');
app.setAppUserModelId('vn.kimthanh.baocaohetkhoa');
if(!app.requestSingleInstanceLock()){app.quit()}
let win;
function create(){
  Menu.setApplicationMenu(null);
  win=new BrowserWindow({width:1100,height:820,minWidth:640,minHeight:600,title:'Báo cáo hết khóa',
    icon:path.join(__dirname,'icon.ico'),backgroundColor:'#FAF8F2',autoHideMenuBar:true,
    webPreferences:{contextIsolation:true,nodeIntegration:false,sandbox:true}});
  win.loadFile(path.join(__dirname,'index.html'));
  win.webContents.setWindowOpenHandler(function(d){shell.openExternal(d.url);return{action:'deny'}});
  win.webContents.on('will-navigate',function(e){e.preventDefault()});
  /* tải file xuống: hiện hộp thoại chọn nơi lưu, lưu xong mở thư mục chứa file */
  win.webContents.session.on('will-download',function(e,item){
    item.once('done',function(ev,state){if(state==='completed')shell.showItemInFolder(item.getSavePath())})});
}
app.on('second-instance',function(){if(win){if(win.isMinimized())win.restore();win.focus()}});
app.whenReady().then(create);
app.on('window-all-closed',function(){app.quit()});
