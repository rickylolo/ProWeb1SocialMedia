<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meeting Point - Responsive Social Media Website Using HTML, CSS & JavaScript</title>
    <!-- ICONSCOUT CDN -->
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v2.1.6/css/unicons.css">
    <!-- STYLESHEET -->
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <nav>
        <div class="container">
            <h2 class="log">
                Meeting Point
            </h2>
            <div class="search-bar">
                <i class="uil uil-search"></i>
                <input type="search" placeholder="Search for creators, inspirations, and projects">
            </div>
            <div class="create">
                <label class="btn btn-primary" for="create-post">Create</label>
                <div class="profile-photo">
                    <img src="images/profile-1.jpg">
                </div>
                <!-- menu button to show sidebar -->
                <button id="menu-btn"><i class="uil uil-bars"></i></button>
            </div>
        </div>
    </nav>

    <!------------------------- MAIN -------------------------->
    <main>
        <div class="container">
            <!--======================== LEFT ==========================-->
            <div class="left">
                <a class="profile">
                    <div class="profile-photo">
                        <img src="images/profile-1.jpg">
                    </div>
                    <div class="handle">
                        <h4>Felipe Sebastian</h4>
                        <p class="text-muted">
                            @sebas
                        </p>
                    </div>
                </a>

                <!-- close button -->
                <span id="close-btn"><i class="uil uil-multiply"></i></span>

                <!-------------------- SIDEBAR ------------------------->
                <div class="sidebar">
                    <a class="menu-item active">
                        <span><i class="uil uil-home"></i></span><h3>Home</h3>
                    </a>
                    <a class="menu-item">
                        <span><i class="uil uil-compass"></i></span><h3>Explore</h3>
                    </a>
                    <a class="menu-item" id="notifications">
                        <span><i class="uil uil-bell"><small class="notification-count">9+</small></i></span><h3>Notifications</h3>
                        <!-------------------- NOTIFICATION POPUP ---------------->
                        <div class="notifications-popup">
                            <div>
                                <div class="profile-photo">
                                    <img src="images/profile-2.jpg">
                                </div>
                                <div class="notification-body">
                                    <b>Keke Benjamin</b> accepted your friend request
                                    <small class="text-muted">2 DAYS AGO</small>
                                </div>
                            </div>
                            <div>
                                <div class="profile-photo">
                                    <img src="./images/profile-3.jpg">
                                </div>
                                <div class="notification-body">
                                    <b>John Doe</b> commented on your post
                                    <small class="text-muted">1 HOUR AGO</small>
                                </div>
                            </div>
                            <div>
                                <div class="profile-photo">
                                    <img src="./images/profile-4.jpg">
                                </div>
                                <div class="notification-body">
                                    <b>Mary Oppong</b> and <b>283 others </b> liked your post
                                    <small class="text-muted">4 MINUTES AGO</small>
                                </div>
                            </div>
                            <div>
                                <div class="profile-photo">
                                    <img src="./images/profile-5.jpg">
                                </div>
                                <div class="notification-body">
                                    <b>Doris Y. Lartey</b> commented on a post you are tagged in
                                    <small class="text-muted">2 DAYS AGO</small>
                                </div>
                            </div>
                            <div>
                                <div class="profile-photo">
                                    <img src="./images/profile-6.jpg">
                                </div>
                                <div class="notification-body">
                                    <b>Donald Trump</b> commented on a post you are tagged in
                                    <small class="text-muted">1 HOUR AGO</small>
                                </div>
                            </div>
                            <div>
                                <div class="profile-photo">
                                    <img src="./images/profile-7.jpg">
                                </div>
                                <div class="notification-body">
                                    <b>jane Doe</b> commented on your post
                                    <small class="text-muted">1 HOUR AGO</small>
                                </div>
                            </div>
                        </div>
                        <!-------------------- END NOTIFICATION POPUP ---------------->
                    </a>
                    <a class="menu-item" id="messages-notification">
                        <span><i class="uil uil-envelope-alt"><small class="notification-count">6</small></i></span><h3>Messagse</h3>
                    </a>
                    <a class="menu-item">
                        <span><i class="uil uil-bookmark"></i></span><h3>Bookmarks</h3>
                    </a>
                    <a class="menu-item">
                        <span><i class="uil uil-chart-line"></i></span><h3>Analytics</h3>
                    </a>
                    <a class="menu-item" id="theme">
                        <span><i class="uil uil-palette"></i></span><h3>Theme</h3>
                    </a>
                    <a class="menu-item">
                        <span><i class="uil uil-setting"></i></span><h3>Settings</h3>
                    </a>                        
                </div>
                <!------------------- END OF SIDEBAR -------------------->
                <label for="create-post" class="btn btn-primary">Create Post</label>
            </div>
            <!------------------- END OF LEFT -------------------->



            <!--======================== MIDDLE ==========================-->
            <div class="middle">
                <!------------------- STORIES -------------------->
                <div class="stories">
                    <div class="story">
                        <div class="profile-photo">
                            <img src="images/profile-1.jpg">
                        </div>
                        <p class="name">Your Story</p>
                    </div>
                    <div class="story">
                        <div class="profile-photo">
                            <img src="images/profile-014.png">
                        </div>
                        <p class="name">FCFM UANL (OFICIAL)</p>
                    </div>
                    <div class="story">
                        <div class="profile-photo">
                            <img src="images/profile-15.png">
                        </div>
                        <p class="name">Adopta Monterrey</p>
                    </div>
                    <div class="story">
                        <div class="profile-photo">
                            <img src="images/profile-016.jpg">
                        </div>
                        <p class="name">Cristiano Ronaldo</p>
                    </div>
                    <div class="story">
                        <div class="profile-photo">
                            <img src="images/profile-16.jpg">
                        </div>
                        <p class="name">Suri Cz</p>
                    </div>
                    <div class="story">
                        <div class="profile-photo">
                            <img src="images/profile-17.jpg">
                        </div>
                        <p class="name">Marisol Acosta</p>
                    </div>
                </div>
                <!------------------- END OF STORIES -------------------->
                <form class="create-post">
                    <div class="profile-photo">
                        <img src="./images/profile-1.jpg">
                    </div>
                    <input type="text" placeholder="What's on your mind, Felipe?" id="create-post">
                    <input type="submit" value="Post" class="btn btn-primary">
                </form>

                <!------------------- FEEDS --------------------->
                <div class="feeds">
                    <!------------------- FEED 1 --------------------->
                    <div class="feed">
                        <div class="head">
                            <div class="user">
                                <div class="profile-photo">
                                    <img src="./images/profile-21.jpg">
                                </div>
                                <div class="ingo">
                                    <h3>Elizabeth Woolridge Grant</h3>
                                    <small>Albuquerque, New Mexico, 15 minutes ago</small>
                                </div>
                            </div>
                            <span class="edit">
                                <i class="uil uil-ellipsis-h"></i>
                            </span>
                        </div>

                        <div class="photo">
                            <img src="./images/feed-01.jpg">
                        </div>

                        <div class="action-buttons">
                            <div class="interaction-buttons">
                                <span><i class="uil uil-heart"></i></span>
                                <span><i class="uil uil-comment-dots"></i></span>
                                <span><i class="uil uil-share-alt"></i></span>
                            </div>
                            <div class="bookmark">
                                <span><i class="uil uil-bookmark-full"></i></span>
                            </div>
                        </div>

                        <div class="liked-by">
                            <span><img src="./images/profile-10.jpg"></span>
                            <span><img src="./images/profile-4.jpg"></span>
                            <span><img src="./images/profile-15.jpg"></span>
                            <p>Liked by <b>Billie Eilish</b> and <b>25,323 others</b></p>
                        </div>

                        <div class="caption">
                            <p><b>Elizabeth Woolridge Grant</b> I miss this place <span class="harsh-tag">#Albuquerque</span></p>
                        </div>
                        <div class="comments text-muted">View all 277 comments</div>
                    </div>
                    <!---------------- END OF FEED ----------------->
                    <!------------------- FEED 2 --------------------->
                    <div class="feed">
                        <div class="head">
                            <div class="user">
                                <div class="profile-photo">
                                    <img src="./images/profile-014.png">
                                </div>
                                <div class="ingo">
                                    <h3>FCFM UANL (OFICIAL)</h3>
                                    <small>6d</small>
                                </div>
                            </div>
                            <span class="edit">
                                <i class="uil uil-ellipsis-h"></i>
                            </span>
                        </div>

                        <div class="photo">
                            <img src="./images/feed-02.jpg">
                        </div>

                        <div class="action-buttons">
                            <div class="interaction-buttons">
                                <span><i class="uil uil-heart"></i></span>
                                <span><i class="uil uil-comment-dots"></i></span>
                                <span><i class="uil uil-share-alt"></i></span>
                            </div>
                            <div class="bookmark">
                                <span><i class="uil uil-bookmark-full"></i></span>
                            </div>
                        </div>

                        <div class="liked-by">
                            <span><img src="./images/profile-10.jpg"></span>
                            <span><img src="./images/profile-4.jpg"></span>
                            <span><img src="./images/profile-15.jpg"></span>
                            <p>Liked by <b>Suri Cz</b> and <b>345 others</b></p>
                        </div>

                        <div class="caption">
                            <p><b>FCFM UANL (OFICIAL)</b> Hoy estamos celebrando nuestro aniversario 69. <span class="harsh-tag">#Aniversario69</span></p>
                        </div>
                        <div class="comments text-muted">View all 33 comments</div>
                    </div>
                    <!---------------- END OF FEED ----------------->
                    <!------------------- FEED 3 --------------------->
                    <div class="feed">
                        <div class="head">
                            <div class="user">
                                <div class="profile-photo">
                                    <img src="./images/profile-15.png">
                                </div>
                                <div class="ingo">
                                    <h3>Adopta Monterrey</h3>
                                    <small>Monterrey, 2 minutes ago</small>
                                </div>
                            </div>
                            <span class="edit">
                                <i class="uil uil-ellipsis-h"></i>
                            </span>
                        </div>

                        <div class="photo">
                            <img src="./images/feed-3.jpg">
                        </div>

                        <div class="action-buttons">
                            <div class="interaction-buttons">
                                <span><i class="uil uil-heart"></i></span>
                                <span><i class="uil uil-comment-dots"></i></span>
                                <span><i class="uil uil-share-alt"></i></span>
                            </div>
                            <div class="bookmark">
                                <span><i class="uil uil-bookmark-full"></i></span>
                            </div>
                        </div>

                        <div class="liked-by">
                            <span><img src="./images/profile-10.jpg"></span>
                            <span><img src="./images/profile-4.jpg"></span>
                            <span><img src="./images/profile-15.jpg"></span>
                            <p>Liked by <b>Suri Cz</b> and <b>134 others</b></p>
                        </div>

                        <div class="caption">
                            <p><b>Adopta Monterrey</b> Gatito en adopci�n. Informes al 8121122747 <span class="harsh-tag">#AdopcionResponsable</span></p>
                        </div>
                        <div class="comments text-muted">View all 23 comments</div>
                    </div>
                    <!---------------- END OF FEED ----------------->
                    <!------------------- FEED 4 --------------------->
                    <div class="feed">
                        <div class="head">
                            <div class="user">
                                <div class="profile-photo">
                                    <img src="./images/profile-016.jpg">
                                </div>
                                <div class="ingo">
                                    <h3>Cristiano Ronaldo</h3>
                                    <small>4d</small>
                                </div>
                            </div>
                            <span class="edit">
                                <i class="uil uil-ellipsis-h"></i>
                            </span>
                        </div>

                        <div class="photo">
                            <img src="./images/feed-4.jpg">
                        </div>

                        <div class="action-buttons">
                            <div class="interaction-buttons">
                                <span><i class="uil uil-heart"></i></span>
                                <span><i class="uil uil-comment-dots"></i></span>
                                <span><i class="uil uil-share-alt"></i></span>
                            </div>
                            <div class="bookmark">
                                <span><i class="uil uil-bookmark-full"></i></span>
                            </div>
                        </div>

                        <div class="liked-by">
                            <span><img src="./images/profile-10.jpg"></span>
                            <span><img src="./images/profile-4.jpg"></span>
                            <span><img src="./images/profile-15.jpg"></span>
                            <p>Liked by <b>Omar Rodriguez</b> and <b>104,323 others</b></p>
                        </div>

                        <div class="caption">
                            <p><b>Cristiano Ronaldo</b> 3 important points. <span class="harsh-tag">#WellDoneLads</span></p>
                        </div>
                        <div class="comments text-muted">View all 50,345 comments</div>
                    </div>
                    <!---------------- END OF FEED ----------------->
                    <!------------------- FEED 5 --------------------->
                    <div class="feed">
                        <div class="head">
                            <div class="user">
                                <div class="profile-photo">
                                    <img src="./images/profile-16.jpg">
                                </div>
                                <div class="ingo">
                                    <h3>Suri Cz</h3>
                                    <small>Monterrey, 5 minutes ago</small>
                                </div>
                            </div>
                            <span class="edit">
                                <i class="uil uil-ellipsis-h"></i>
                            </span>
                        </div>

                        <div class="photo">
                            <img src="./images/feed-5.jpg">
                        </div>

                        <div class="action-buttons">
                            <div class="interaction-buttons">
                                <span><i class="uil uil-heart"></i></span>
                                <span><i class="uil uil-comment-dots"></i></span>
                                <span><i class="uil uil-share-alt"></i></span>
                            </div>
                            <div class="bookmark">
                                <span><i class="uil uil-bookmark-full"></i></span>
                            </div>
                        </div>

                        <div class="liked-by">
                            <span><img src="./images/profile-10.jpg"></span>
                            <span><img src="./images/profile-4.jpg"></span>
                            <span><img src="./images/profile-15.jpg"></span>
                            <p>Liked by <b>Aldo Emiliano</b> and <b>65 others</b></p>
                        </div>

                        <div class="caption">
                            <p><b>Lana Rose</b> Fue un bonito d�a.</p>
                        </div>
                        <div class="comments text-muted">View all 12 comments</div>
                    </div>
                    <!---------------- END OF FEED ----------------->
                    <!------------------- FEED 6 --------------------->
                    <div class="feed">
                        <div class="head">
                            <div class="user">
                                <div class="profile-photo">
                                    <img src="./images/profile-17.jpg">
                                </div>
                                <div class="ingo">
                                    <h3>Marisol Acosta</h3>
                                    <small>Reynosa, 31 October</small>
                                </div>
                            </div>
                            <span class="edit">
                                <i class="uil uil-ellipsis-h"></i>
                            </span>
                        </div>

                        <div class="photo">
                            <img src="./images/feed-6.jpg">
                        </div>

                        <div class="action-buttons">
                            <div class="interaction-buttons">
                                <span><i class="uil uil-heart"></i></span>
                                <span><i class="uil uil-comment-dots"></i></span>
                                <span><i class="uil uil-share-alt"></i></span>
                            </div>
                            <div class="bookmark">
                                <span><i class="uil uil-bookmark-full"></i></span>
                            </div>
                        </div>

                        <div class="liked-by">
                            <span><img src="./images/profile-10.jpg"></span>
                            <span><img src="./images/profile-4.jpg"></span>
                            <span><img src="./images/profile-15.jpg"></span>
                            <p>Liked by <b>Denisse Cardoza</b> and <b>54 others</b></p>
                        </div>

                        <div class="caption">
                            <p><b>Marisol Acosta</b> Cuenten experiencias paranormales. <span class="harsh-tag">#Halloween</span></p>
                        </div>
                        <div class="comments text-muted">View all 32 comments</div>
                    </div>
                    <!---------------- END OF FEED ----------------->
                    <!------------------- FEED 7 --------------------->
                    <div class="feed">
                        <div class="head">
                            <div class="user">
                                <div class="profile-photo">
                                    <img src="./images/profile-18.png">
                                </div>
                                <div class="ingo">
                                    <h3>Salma Zea</h3>
                                    <small>CDMX, 15 minutes ago</small>
                                </div>
                            </div>
                            <span class="edit">
                                <i class="uil uil-ellipsis-h"></i>
                            </span>
                        </div>

                        <div class="photo">
                            <img src="./images/feed-7.jpg">
                        </div>

                        <div class="action-buttons">
                            <div class="interaction-buttons">
                                <span><i class="uil uil-heart"></i></span>
                                <span><i class="uil uil-comment-dots"></i></span>
                                <span><i class="uil uil-share-alt"></i></span>
                            </div>
                            <div class="bookmark">
                                <span><i class="uil uil-bookmark-full"></i></span>
                            </div>
                        </div>

                        <div class="liked-by">
                            <span><img src="./images/profile-10.jpg"></span>
                            <span><img src="./images/profile-4.jpg"></span>
                            <span><img src="./images/profile-15.jpg"></span>
                            <p>Liked by <b>Suri Cz</b> and <b>63 others</b></p>
                        </div>

                        <div class="caption">
                            <p><b>Salma Zea</b> Recordando. <span class="harsh-tag">#8M</span></p>
                        </div>
                        <div class="comments text-muted">View all 2 comments</div>
                    </div>
                    <!---------------- END OF FEED ----------------->
                </div>
                <!------------------------------- END OF FEEDS ------------------------------------>
            </div>
            <!--======================== END OF MIDDLE ==========================-->


            <!--======================== RIGHT ==========================-->
            <div class="right">
                <div class="messages">
                    <div class="heading">
                        <h4>Messages</h4><i class="uil uil-edit"></i>
                    </div>
                    <!------------ SEARCH BAR -------------->
                    <div class="search-bar">
                        <i class="uil uil-search"></i>
                        <input type="search" placeholder="Search messages" id="message-search">
                    </div>
                    <!------------ MESSAGES CATEGORY -------------->
                    <div class="category">
                        <h6 class="active">Primary</h6>
                        <h6>General</h6>
                        <h6 class="message-requests">Requests(7)</h6>
                    </div>
                    <!------------ MESSAGE -------------->
                    <!----- MESSAGE ----->
                    <div class="message">
                        <div class="profile-photo">
                            <img src="./images/profile-2.jpg">
                        </div>
                        <div class="message-body">
                            <h5>Edem Quist</h5>
                            <p class="text-muted">Just woke up bruh</p>
                        </div>
                    </div>
                    <!----- MESSAGE ----->
                    <div class="message">
                        <div class="profile-photo">
                            <img src="./images/profile-3.jpg">
                            <div class="active"></div>
                        </div>
                        <div class="message-body">
                            <h5>Franca Deila</h5>
                            <p class="text-bold">Received bruh. Thanks!</p>
                        </div>
                    </div>
                    <!----- MESSAGE ----->
                    <div class="message">
                        <div class="profile-photo">
                            <img src="./images/profile-4.jpg">
                        </div>
                        <div class="message-body">
                            <h5>Jane Doe</h5>
                            <p class="text-bold">ok</p>
                        </div>
                    </div>
                    <!----- MESSAGE ----->
                    <div class="message">
                        <div class="profile-photo">
                            <img src="./images/profile-5.jpg">
                        </div>
                        <div class="message-body">
                            <h5>Daniella Jackson</h5>
                            <p class="text-bold">2 new messages</p>
                        </div>
                    </div>
                    <!----- MESSAGE ----->
                    <div class="message">
                        <div class="profile-photo">
                            <img src="./images/profile-6.jpg">
                        </div>
                        <div class="message-body">
                            <h5>Juliet Makarey</h5>
                            <p class="text-muted">lol u right</p>
                        </div>
                    </div>
                    <!----- MESSAGE ----->
                    <div class="message">
                        <div class="profile-photo">
                            <img src="./images/profile-7.jpg">
                            <div class="active"></div>
                        </div>
                        <div class="message-body">
                            <h5>Chantel Msiza</h5>
                            <p class="text-bold">Birthday Tomorrow!</p>
                        </div>
                    </div>
                </div>
                <!------------ END OF MESSAGES -------------->


                <!------------ FRIEND REQUESTS -------------->
                <div class="friend-requests">
                    <h4>Requests</h4>
                    <!----- REQUEST 1----->
                    <div class="request">
                        <div class="info">
                            <div class="profile-photo">
                                <img src="./images/profile-8.jpg">
                            </div>
                            <div>
                                <h5>Hajia Bintu</h5>
                                <p class="text-muted">8 mutual friends</p>
                            </div>
                        </div>
                        <div class="action">
                            <button class="btn btn-primary">Accept</button>
                            <button class="btn">Decline</button>
                        </div>
                    </div>
                    <!----- REQUEST 2----->
                    <div class="request">
                        <div class="info">
                            <div class="profile-photo">
                                <img src="./images/profile-9.jpg">
                            </div>
                            <div>
                                <h5>Jackline Mensah</h5>
                                <p class="text-muted">2 mutual friends</p>
                            </div>
                        </div>
                        <div class="action">
                            <button class="btn btn-primary">Accept</button>
                            <button class="btn">Decline</button>
                        </div>
                    </div>
                    <!----- REQUEST 3----->
                    <div class="request">
                        <div class="info">
                            <div class="profile-photo">
                                <img src="./images/profile-10.jpg">
                            </div>
                            <div>
                                <h5>Jennifer Lawrence</h5>
                                <p class="text-muted">19 mutual friends</p>
                            </div>
                        </div>
                        <div class="action">
                            <button class="btn btn-primary">Accept</button>
                            <button class="btn">Decline</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <!--====================== END OF RIGHT ==========================-->
        </div>
    </main>

 <!--================================================ THEME CUSTOMIZATION =============================================-->
 <div class="customize-theme">
    <div class="card">
        <h2>Customize your view</h2>
        <p class="text-muted">Manage your font size, color, and background.</p>

        <!------------ FONT SIZES ------------->
        <div class="font-size">
            <h4>Font Size</h4>
            <div>
                <h6>Aa</h6>
            <div class="choose-size">
                <span class="font-size-1"></span>
                <span class="font-size-2"></span>
                <span class="font-size-3"></span>
                <span class="font-size-4"></span>
                <span class="font-size-5"></span>
            </div>
            <h3>Aa</h3>
            </div>
        </div>

        <!------------ PRIMARY COLORS ------------->
        <div class="color">
            <h4>Color</h4>
            <div class="choose-color">
            <span class="color-1 active"></span>
            <span class="color-2"></span>
            <span class="color-3"></span>
            <span class="color-4"></span>
            <span class="color-5"></span>
            </div>
        </div>

        <!---------- BACKGROUND COLORS ------------>
        <div class="background">
            <h4>Background</h4>
            <div class="choose-bg">
                <div class="bg-1 active">
                    <span></span>
                    <h5 for="bg-1">Light</h5>
                </div>
                <div class="bg-2">
                    <span></span>
                    <h5>Dim</h5>
                </div>
                <div class="bg-3">
                    <span></span>
                    <h5 for="bg-3">Lights Out</h5>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="js/index.js"></script>
</body>
</html>