import React, { Component } from "react";
import "../css/NotFound.css";
import { Link } from "react-router-dom";
import { Button } from "antd";

/**
 * App 현재 url과 일치하는 경로가 없으면 구성 요소에서 404 페이지 렌더링
 */
class NotFound extends Component {
    render() {
        return (
            <div className="page-not-found">
                <h1 className="title">404</h1>
                <div className="desc">
                    The Page you're looking for was not found.
                </div>
                <Link to="/">
                    <Button className="go-back-btn" type="primary" size="large">
                        Go Back
                    </Button>
                </Link>
            </div>
        );
    }
}

export default NotFound;
