/**
 *
 * @authors luozh@snail.com
 * @date    2016-03-21 16:42:35
 * @description 主入口模块
 */

import React from 'react';
import { connect } from 'react-redux';

// 引入Antd的导航组件
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

//获取menus
import { fetchMenus } from '../../actions/menu';
import {Link} from 'react-router';

// 引入主体样式文件
import './AppMain.scss';


const {Header, Content, Footer, Sider} = Layout;
const { SubMenu } = Menu;

// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
  const { menus } = state;

  return {
    menus
  };
}

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch) {
  // bindActionCreators(ActionCreators, dispatch)
  return {
    fetchMenus: () => dispatch(fetchMenus())
  };
}

 class SiderDemo extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    //console.log(collapsed);
    this.setState({
      collapsed
    });
  }

  componentWillMount(){

  }

  componentDidMount(){
      let bodyHeight = window.innerHeight + "px";
      this.setState({
        bodyHeight : bodyHeight
      });

      this.props.fetchMenus().then(
          value => this.setState({menus:value}),
          error => this.setState({loading: false, error: error})
      );

       //绑定正确的上下文
      this.props.fetchMenus().then((menus,error) =>{
         this.setState({
            menus : menus.value
          });
          console.log("menus:",menus.value)
      });

      //console.log(window.innerHeight)
  }

  componentDidUpdate() {
    //不能setState
    console.log("states:",this.state)
  }


  render() {
      //获取菜单
      function getMenuList(state){
          if(state && state.menus && state.menus.length > 0){
              return   state.menus.map(menu =>  <SubMenu key={menu.id} title={<span><Icon type={menu.icon} />{menu.name}</span>}>
                    {menu.subMenus.map(sub => <Menu.Item key={sub.id}>   <Link to={sub.url}>
                                       {sub.name}
                </Link></Menu.Item>)}
                </SubMenu>)
          }
      }

    return (
      <div id="main"  style={{height:this.state.bodyHeight}}>
      <Layout id="components-layout-demo-side"  style={{height:this.state.bodyHeight}}>
        <Sider
      collapsible
      collapsed={this.state.collapsed}
      onCollapse={this.onCollapse}
      >
          <img src='assets/images/logo.png' width="50" id="logo"/>
           <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
        {

           getMenuList(this.state)

        }
          </Menu>
        </Sider>
        <Layout className="header">
          <Header style={{
        background: '#fff',
        padding: 0,
        height: 90
      }} />
          <Content style={{
        margin: '0 16px'
      }}>
            <Breadcrumb style={{
        margin: '12px 0'
      }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{
        padding: 24,
        background: '#fff',
        minHeight: 360
      }}>
              content
            </div>
          </Content>
          <Footer style={{
        textAlign: 'center'
      }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
      </div>
      );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SiderDemo);

