import PaintforhireForm from "../../components/1ServicesPage/1PaintforhireForm/PaintforhireForm";
import { Layout, Flex } from "antd";
const { Sider, Content } = Layout;
import { Carousel } from "antd";
import { Divider } from "antd";
import { Outlet, useOutletContext } from "react-router-dom";

// const carouselcontentStyle = {
//   padding: 0,
//   margin: 5,
//   height: "300px",
//   color: "#fff",
//   lineHeight: "300px",
//   textAlign: "center",
//   background: "#364d79",
// };
// const headerStyle = {
//   textAlign: 'center',
//   color: '#fff',
//   height: 64,
//   paddingInline: 48,
//   lineHeight: '64px',
//   backgroundColor: '#4096ff',
// };
const contentStyle = {
  textAlign: "center",
  minHeight: 570,
  lineHeight: "120px",
  // color: '#fff',
  // backgroundColor: '#0958d9',
  color: "black",
  backgroundColor: "#eae8f4",
};
const siderStyle = {
  textAlign: "left",
  justifyContent: "top",
  lineHeight: "25px",
  // color: '#fff',
  // backgroundColor: '#1677ff',
  color: "black",
  backgroundColor: "white",
  // backgroundColor: '#478e80',
};
// const footerStyle = {
//   textAlign: 'center',
//   color: '#fff',
//   backgroundColor: '#4096ff',
// };
const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "calc(100% )",
  maxWidth: "calc(100% )",
};

export default function PaintforhirePage({ user, setUser }) {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  useOutletContext();


  return (
    <>

      <Flex gap="middle" wrap="wrap">
        <Layout style={layoutStyle}>
          {/* <Header style={headerStyle}>Header</Header> */}
          <Layout>
            <Content style={contentStyle}>
              
              <Carousel afterChange={onChange}>
                <div>
                  {/* <h3 style={carouselcontentStyle}>1</h3> */}
                  <img
                    src="../../../public/paintsvc1.png"
                    alt="paintsvc1"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div>
                  <img
                    src="../../../public/1ServicesPageCarousel/1PaintforhireCarousel/paintsvc2.png"
                    alt="paintsvc2"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div>
                  <img
                    src="../../../public/1ServicesPageCarousel/1PaintforhireCarousel/paintsvc3.png"
                    alt="paintsvc3"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </Carousel>
            </Content>

            <Sider width="40%" style={siderStyle}>
            <Divider orientation="left" style={{margin: "0px" }}> <h2 style={{ fontFamily: 'Palatino Linotype'}}> Painting Services</h2> </Divider>

              {/* <p style={{siderStyle}}> */}
              <p style={{ margin: "0% 0% 10% 7%", padding: "0" }}>
              Need a few models painted for your D&D, Kill Team, Blood Bowl games? Or do you have an army of Imperial Stormtroopers or Ultramarines units you need to field asap? Either way, we've got your back, with our painters-for-hire service.   <br></br>
              </p>

              <PaintforhireForm user={user} setUser={setUser} />

            </Sider>
          </Layout>
          {/* <Footer style={footerStyle}>Footer</Footer> */}
        </Layout>
      </Flex>
    </>
  );
}
