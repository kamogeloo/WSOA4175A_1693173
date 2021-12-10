import './App.css';
import Navbar from './components/Navbar';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Blogs from './pages/blogPosts';
import NetArt from './pages/netArt';
import Buttons from './pages/buttons';
import FirstBlog from './blogs/firstBlog';
import SecondBlog from './blogs/secondBlog';
import ThirdBlog from './blogs/thirdBlog';
import FourthBlog from './blogs/fourthBlog';
import BlogFive from './blogs/blogFive';
import SixthBlog from './blogs/sixthBlog';
import SeventhBlog from './blogs/seventhBlog';
import EighthBlog from './blogs/eighthBlog';
import NinethBlog from './blogs/ninethBlog';
import TenththBlog from './blogs/tenthBlog';







function App() {
  return (
    <div className="App">
      <Navbar/>
       <Switch>
         <Route exact path='/' component={Home}/>
         <Route export path='/blogPosts' component={Blogs}/>
         <Route export path='/netArt' component={NetArt}/>
         <Route export path='/buttons' component={Buttons}/>
         <Route export path='/firstBlog' component={FirstBlog}/>
         <Route export path='/secondBlog' component={SecondBlog}/>
         <Route export path='/thirdBlog' component={ThirdBlog}/>
         <Route export path='/fourthBlog' component={FourthBlog}/>
         <Route export path='/blogFive' component={BlogFive}/>
         <Route export path='/sixthBlog' component={SixthBlog}/>
         <Route export path='/seventhBlog' component={SeventhBlog}/>
         <Route export path='/eighthBlog' component={EighthBlog}/>
         <Route export path='/ninethBlog' component={NinethBlog}/>
         <Route export path='/tenthBlog' component={TenththBlog}/>
       </Switch>
       
       <Footer/>
    </div>
    
  );
}

export default App;
