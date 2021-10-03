import { Store } from './components/Store/Store';
import { Layout } from './components/Layout/Layout';
import { UserSearchApp } from './components/UserSearchApp/UserSearchApp';

function App() {
  return (
    <Store>
      <Layout>
        <UserSearchApp />
      </Layout>
    </Store>
  )
}

export default App;
