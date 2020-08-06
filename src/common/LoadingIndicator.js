import React from "react";
import { Spin, Icon } from "antd";

/**
 * 로딩 표시 렌더링
 */
export default function LoadingInidcator(props) {
    const antIcon = (
        <Icon type="loading-3-quarters" style={{ fontSize: 30 }} spin />
    );
    return (
        <Spin
            indicator={antIcon}
            style={{ display: "block", textAlign: "center", marginTop: 30 }}
        />
    );
}
