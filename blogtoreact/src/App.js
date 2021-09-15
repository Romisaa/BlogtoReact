import './App.css';
import React from 'react';
import './style.css';

function App() {
  return (
    <div classNameName="App">
      <header className="App-header">
      </header>

      <header className="main_header">
            <div className="d-flex justify-content-center align-items-center flex-column py-5">
                <h1 className="text-uppercase main_heading">LULL's World</h1>
                <p className="main_heading__para">Welcome To Your   <span className="text-capitalize bg-dark text-white py-2 px-3">Free Space</span> </p>
            </div>
            {/* <!-- //the main image --> */}
            <div className="main_header__div d-flex align-items-start
        justify-content-center  flex-column shadow pl-5">
                <p>LULL</p>
                {/* <!-- <h2 className="text-uppercase">the Progammer guy</h2> --> */}
                <h2 className="animateWord">
                    <span>Where you can</span>
                    <div>
                        {/* <!--        Use classNamees 2,3, or 4 to match the number of words --> */}
                        <ul className="flip4">
                            <li>Express Yourself</li>
                            <li>Sharing Experiences</li>
                            <li>Reading Articles</li>
                            <li>Making Friends</li>
                        </ul>
                    </div>
                </h2>
                {/* <!-- <button className="text-uppercase">subscribe</button> --> */}
            </div>
        </header>
        {/* <!-- header ends --> */}
        {/* <!-- two sided blog part starts --> */}
        <div className="container-fluid ">
            <div className="row ">
                {/* <!-- to get the space form left and right --> */}
                <div className="col-xl-10  col-lg-10 col-md-12 col-11 mx-auto my-5">
                    <div className="row gx-5 mx-sm-auto">
                        {/* <!-- left side of the blog  --> */}
                        <div className="col-lg-8 col-md-11 col-11 mx-auto">
                            <div className="row gy-5 ">
                                <div className="col-12 card p-4 shadow blog_left__div">
                                    <div className="d-flex justify-content-center align-items-center flex-column pt-3 pb-5 ">
                                        <h1 className="text-uppercase">First Article</h1>
                                        <p className="blog_title"> <span className="font-weight-bold"> Title description, </span> Aug 12, 2020 </p>
                                    </div>
                                    <figure className="right_side_img mb-5">
                                        <img src="pic(3).jpg" className="img-fluid shadow"/>
                                    </figure>
                                    <p><span className="font-weight-bold">Lorem ipsum,</span>dolor sit amet consectetur adipisicing elit. 
                                        Illo laudantium omnis repudiandae, quis perferendis perspiciatis deserunt non fugiat! 
                                        Harum reiciendis modi tenetur distinctio similique cum qui eius sint voluptatem consequuntur?</p>
                                    
                                    <div className="d-flex justify-content-between left_div_btns">
                                        <div>
                                            <button className="left_div__like" id="like_btn"><i className="fa fa-thumbs-up"></i>Like</button>
                                        </div>
                                        <div>
                                            <button className="left_div__reply" onclick="reply('reply1')">Replies <badge className="bg-white text-dark p-2">1</badge></button>
                                        </div>
                                    </div>
                                    <div className="replies" id="reply1">
                                        <div className="d-flex justify-content-start flex-row align-items-center card reply_card py-3 ">
                                            <div className=" reply_img mx-2 align-self-center ">
                                                <img src="icons8-person-64.png" />
                                            </div>
                                            <div className="reply_text__left">
                                                <p className="blog_title "> <span className="font-weight-bold"> User, </span> Aug 12, 2020, 7:20 PM </p>
                                                <p>I love this content.</p>
                                            </div>
                                        </div>


                                        {/* <!-- To add reply --> */}
                                        <div className="form">
                                            <h5>Add Reply</h5>
                                            Name: <input type="text" id="name"/><br/><br/>
                                            Date: <input type="date" id="date"/><br/><br/>
                                            Body: <textarea rows="5" col="30" id="bodyText"></textarea><br/><br/>
                                            <input type="button" id="addReply" value="Add Reply"/>
                                        </div>

                                    </div>
                                </div>
                                {/* <!-- 2nd topic  --> */}
                                <div className="col-12 card p-4 shadow blog_left__div">
                                    <div className="d-flex justify-content-center align-items-center flex-column pt-3 pb-5 ">
                                        <h1 className="text-uppercase">Second Article</h1>
                                        <p className="blog_title"> <span className="font-weight-bold"> Title description, </span> Aug 12, 2020 </p>
                                    </div>
                                    <figure className="right_side_img mb-5">
                                        <img src="https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" className="img-fluid shadow"/>
                                    </figure>
                                    <p><span className="font-weight-bold">Lorem ipsum</span>dolor sit amet, consectetur adipisicing elit. 
                                        Quia voluptatem qui, ipsam nulla saepe ea pariatur aut in quisquam nisi aperiam ipsum ad sit cum esse? 
                                        Eum voluptate quos delectus!</p>
                                   
                                    <div className="d-flex justify-content-between left_div_btns">
                                        <div>
                                            <button className="left_div__like" id="like_btn"><i className="fa fa-thumbs-up"></i>Like</button>
                                        </div>
                                        <div>
                                            <button className="left_div__reply" onclick="reply('reply2')">Replies <badge className="bg-white text-dark p-2">2</badge></button>
                                        </div>
                                    </div>
                                    <div className="replies" id="reply2">
                                        <div className="d-flex justify-content-start flex-row align-items-center card reply_card py-3 ">
                                            <div className=" reply_img mx-2 align-self-center ">
                                                <img src="icons8-person-64.png" />
                                            </div>
                                            <div className="reply_text__left">
                                                <p className="blog_title "> <span className="font-weight-bold"> User </span> Aug 11, 2020, 7:20 PM </p>
                                                <p>I really like the way you write!</p>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-start flex-row align-items-center card reply_card py-3 ">
                                            <div className=" reply_img mx-2 align-self-center ">
                                                <img src="icons8-person-64.png" />
                                            </div>
                                            <div className="reply_text__left">
                                                <p className="blog_title "> <span className="font-weight-bold">User </span> Aug 12, 2020, 7:20 PM </p>
                                                <p>Awesome!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- 3rd topic --> */}
                                <div className="col-12 card p-4 shadow blog_left__div">
                                    <div className="d-flex justify-content-center align-items-center flex-column pt-3 pb-5 ">
                                        <h1 className="text-uppercase">Title Heading</h1>
                                        <p className="blog_title"> <span className="font-weight-bold"> Title description, </span> Aug 12, 2020 </p>
                                    </div>
                                    <figure className="right_side_img mb-5">
                                        <img src="https://images.pexels.com/photos/4050303/pexels-photo-4050303.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className="img-fluid shadow" />
                                    </figure>
                                    <p><span className="font-weight-bold">Lorem ipsum </span>dolor sit amet consectetur adipisicing elit. 
                                        Pariatur omnis possimus temporibus officia quod alias suscipit a blanditiis, 
                                        porro totam culpa dignissimos necessitatibus numquam expedita unde, ut fugiat incidunt tenetur.</p>
                                   
                                    <div className="d-flex justify-content-between left_div_btns">
                                        <div>
                                            <button className="left_div__like" id="like_btn"><i className="fa fa-thumbs-up"></i>Like</button>
                                        </div>
                                        <div>
                                            <button className="left_div__reply" onclick="reply('reply3')">Replies <badge className="bg-white text-dark p-2">4</badge></button>
                                        </div>
                                    </div>
                                    <div className="replies" id="reply3">
                                        <div className="d-flex justify-content-start flex-row align-items-center card reply_card py-3 ">
                                            <div className=" reply_img mx-2 align-self-center ">
                                                <img src="icons8-person-64.png" />
                                            </div>
                                            <div className="reply_text__left">
                                                <p className="blog_title "> <span className="font-weight-bold"> User</span> Aug 12, 2020, 7:20 PM </p>
                                                <p>Awesome!</p>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-start flex-row align-items-center card reply_card py-3 ">
                                            <div className=" reply_img mx-2 align-self-center ">
                                                <img src="icons8-person-64.png" />
                                            </div>
                                            <div className="reply_text__left">
                                                <p className="blog_title "> <span className="font-weight-bold"> User</span> Aug 12, 2020, 7:20 PM </p>
                                                <p>Awesome!</p>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-start flex-row align-items-center card reply_card py-3 ">
                                            <div className=" reply_img mx-2 align-self-center ">
                                                <img src="icons8-person-64.png" />
                                            </div>
                                            <div className="reply_text__left">
                                                <p className="blog_title "> <span className="font-weight-bold"> User </span> Aug 12, 2020, 7:20 PM </p>
                                                <p>Awesome!</p>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-start flex-row align-items-center card reply_card py-3 ">
                                            <div className=" reply_img mx-2 align-self-center ">
                                                <img src="icons8-person-64.png" />
                                            </div>
                                            <div className="reply_text__left">
                                                <p className="blog_title "> <span className="font-weight-bold"> User</span> Aug 12, 2020, 7:20 PM </p>
                                                <p>Awesome!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--  *******************************************************
            **********************************************************.
            right side of the div
            *******************************************************
            **********************************************************
            --> */}
                        <div className="col-lg-3 col-md-7 col-11  justify-content-end m-lg-0 m-auto ">
                            <div className="row gy-5 left_div__blog">
                                {/* <!-- about me --> */}
                                <div className="col-12  about_me_div shadow">
                                    <figure>
                                        <img src="pic(3).jpg" className="img-fluid"/>
                                    </figure>
                                    <p>About LULL</p>
                                    <p>It is a Mental Well-Being App,which is covering 5 African countries: Egypt,Ghana,Kenya,Nigeria and South Africa.</p>
                                </div>
                                {/* <!-- popular post --> */}
                                <div className=" popular_post ">
                                    <div className="right_div__title py-4 pl-2 ">
                                        <h2>Popular Posts</h2>
                                    </div>
                                    <div className="right_sub__div shadow">
                                        <div className="row ">
                                            <div className="col-3  popular_post__img1 py-2 pl-2">
                                            </div>
                                            <div className="col-9">
                                                <h3>About Yoga</h3>
                                                <p className="text-capitalize">Yoga classNamees</p>
                                            </div>
                                        </div>
                                        <div className="row ">
                                            <div className="col-3  popular_post__img2 py-2 pl-2">
                                            </div>
                                            <div className="col-9">
                                                <h3>About Yoga</h3>
                                                <p className="text-capitalize">Yoga classNamees</p>
                                            </div>
                                        </div>
                                        <div className="row ">
                                            <div className="col-3  popular_post__img3 py-2 pl-2">
                                            </div>
                                            <div className="col-9">
                                                <h3>About Yoga</h3>
                                                <p className="text-capitalize">Yoga classNamees</p>
                                            </div>
                                        </div>
                                        <div className="row ">
                                            <div className="col-3  popular_post__img4 py-2 pl-2">
                                            </div>
                                            <div className="col-9">
                                                <h3>About Yoga</h3>
                                                <p className="text-capitalize">Yoga classNamees</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- advertise --> */}
                                <div className=" right_div_post">
                                    <div className="right_div__title py-4 pl-2 ">
                                        <h2>Advertise</h2>
                                    </div>
                                    <div className="right_sub__div ">
                                        <div className="adevetise_img bg-light shadow">
                                            <p>Ads goes here</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- tags --> */}
                                <div className=" right_div_post">
                                    <div className="right_div__title py-4 pl-2 ">
                                        <h2>Tags</h2>
                                    </div>
                                    <div className="tags_main right_sub__div">
                                        <a href="https://youtu.be/5p8e2ZkbOFU" target="_thapa" className="badge shadow text-capitalize"> html </a>
                                        <a href="#" className="badge shadow text-capitalize">Yoga</a>
                                        <a href="#" className="badge shadow text-capitalize"> Sports </a>
                                        <a href="#" className="badge shadow text-capitalize">  Health </a>
                                        <a href="#" className="badge shadow text-capitalize"> Yoga </a>
                                        <a href="#" className="badge shadow text-capitalize"> Sports </a>
                                        <a href="#" className="badge shadow text-capitalize">  Health </a>
                                        <a href="#" className="badge shadow text-capitalize"> Yoga </a>
                                        <a href="#" className="badge shadow text-capitalize"> Sports </a>
                                        <a href="#" className="badge shadow text-capitalize">  Health </a>
                                    </div>
                                </div>
                                {/* <!-- Inspiration --> */}
                                <div className=" right_div_post">
                                    <div className="right_div__title py-4 pl-2 ">
                                        <h2>Inspiration</h2>
                                    </div>
                                    <div className="right_sub__div">
                                        <div className="row gx-3">
                                            <div className="col-6">
                                                <figure>
                                                    <img src="pic(3).jpg" className="img-fluid shadow"/>
                                                </figure>
                                            </div>
                                            <div className="col-6">
                                                <figure>
                                                    <img src="pic(3).jpg" className="img-fluid shadow"/>
                                                </figure>
                                            </div>
                                            <div className="col-6">
                                                <figure>
                                                    <img src="pic(3).jpg" className="img-fluid shadow"/>
                                                </figure>
                                            </div>
                                            <div className="col-6">
                                                <figure>
                                                    <img src="pic(3).jpg" className="img-fluid shadow"/>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Follow Me --> */}
                                <div className=" right_div_post">
                                    <div className="right_div__title py-4 pl-2 ">
                                        <h2>Follow Us</h2>
                                    </div>
                                    <div className="right_sub__div d-flex justify-content-around">
                                        <a href="#"> <i className="fab fa-facebook-square fa-3x"></i></a>
                                        <a href="#" target="_thapa"> <i className="fab fa-3x fa-instagram"></i></a>
                                        <a href="#"> <i className="fab fa-3x fa-github-square"></i> </a>
                                        <a href="#"> <i className="fab fa-3x fa-twitter-square"></i></a>
                                        <a href="#"> <i className="fab fa-3x fa-youtube-square"></i> </a>
                                        <a href="#"> <i className="fab fa-3x fa-linkedin"></i></a>
                                    </div>
                                </div>
                                {/* <!-- Subscribe --> */}
                                <div className=" right_div_post">
                                    <div className="right_div__title py-4 pl-2 ">
                                        <h2>Subscribe</h2>
                                    </div>
                                    <div className="right_sub__div">
                                        <form>
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput1" className="form-label">Enter your e-mail below and get notified on the latest blog posts.</label>
                                                <input type="email" className="form-control mt-2" id="exampleFormControlInput1" placeholder="name@example.com"/>
                                            </div>
                                            <div className="col-12">
                                                <button className="subs_btn d-block" type="submit">Subscribe</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* // <!-- Optional JavaScript --> */}
        {/* // <!-- Popper.js first, then Bootstrap JS --> */}
      <script src={require("https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" ,integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo")}></script>
      <script src={require("https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js" ,integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/")}></script>
      <script src={require("script.js")} type="text/javascript"></script>
    </div>

        

  );
}

export default App;
