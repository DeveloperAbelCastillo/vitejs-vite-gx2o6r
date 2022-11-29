import { useState } from 'react';
import reactLogo from './assets/react.svg';
import usePWA from 'react-pwa-install-prompt';
import './App.css';
import './output.css';

function App() {
  const [count, setCount] = useState(0);
  const { isStandalone, isInstallPromptSupported, promptInstall } = usePWA();

  const onClickInstall = async () => {
    const didInstall = await promptInstall();
    if (didInstall) {
      // User accepted PWA install
    }
  };

  const renderInstallButton = () => {
    if (isInstallPromptSupported && isStandalone)
      return <button onClick={onClickInstall}>Prompt PWA Install</button>;
    return null;
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h1 className="text-3xl text-blue-600 font-bold underline">
        Hola Mundo!!!
      </h1>
      <div>
        <h2>PWA Infos</h2>
        <p>
          Is Install Prompt Supported ?{' '}
          {isInstallPromptSupported ? 'true' : 'false'}
        </p>
        <p>Is Standalone ? {isStandalone ? 'true' : 'false'}</p>
        {renderInstallButton()}
      </div>
      )
    </div>
  );
}

export default App;
