const { app, BrowserWindow } = require("electron");
const { path } = require("path");

function createWindow() {
  // Crie uma janela de navegador.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  // Carregue o arquivo HTML na janela.
  win.loadUrl("http://localhost:3000");
}

app.whenReady().then(createWindow);

// Encerre o aplicativo quando todas as janelas forem fechadas (no Windows, não no macOS).
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// Crie uma nova janela quando o aplicativo estiver ativado (no macOS, típico).
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
