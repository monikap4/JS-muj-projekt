import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Jogini } from '../components/Jogini';
import { Letenky } from '../components/Letenky';

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <Jogini />
    <Letenky />
  </div>
);
