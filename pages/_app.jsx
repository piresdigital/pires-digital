import Transition from '../components/atoms/Transition';
import '../public/styles.css';

export default function App({ Component, pageProps }) {
  return <Transition><Component {...pageProps} /></Transition>
}