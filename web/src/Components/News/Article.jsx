import React from "react";
import "./news.scss";

export default function Article(props) {
    return (
        <div style={{ margin: "10px" }}>
            <figure class="snip1529">
                <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample13.jpg"
                    alt="pr-sample13"
                />
                <div class="date">
                    <span class="day">28</span>
                    <span class="month">Apr</span>
                </div>
                <figcaption>
                    <h3>An Abstract Post Heading</h3>
                    <p>
                        Which is worse, that everyone has his price, or that the
                        price is always so low.
                    </p>
                </figcaption>
                <div class="hover">
                    <i class="ion-android-open"></i>
                </div>
                <a href="#"></a>
            </figure>
        </div>
    );
}
