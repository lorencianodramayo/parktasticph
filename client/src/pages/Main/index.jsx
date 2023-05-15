import { Layout } from "antd";
import { footerNavigation, headerNavigation } from "../../constant";

import SiteHeader from "../../components/Common/SiteHeader";
import SiteFooter from "../../components/Common/SiteFooter";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const Main = () => {
  return (
    <Layout className="layout">
      <SiteHeader headerNavigation={headerNavigation} />
      <Content style={{ minHeight: "calc(100vh - 9em)", marginTop: "64px" }}>
        <Outlet />
      </Content>
      <SiteFooter footerNavigation={footerNavigation} />
    </Layout>
  );
};
export default Main;
