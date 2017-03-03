import React from 'react';
import { connect } from 'react-redux';
import { Table,Button,Popconfirm } from 'antd';
import { fetchUsers } from './../../actions/users';
import DateTimeFilterDropdown from './../../components/DateTimeFilterDropdown';
const ButtonGroup = Button.Group;

// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
  return state;
}

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch) {
  // bindActionCreators(ActionCreators, dispatch)
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    deleteUser: () =>dispatch(deleteUsers())
  };
}


 class UsersPage extends React.Component {

   static propTypes = {
    fetchUsers: React.PropTypes.func,
    users: React.PropTypes.object
  };



 state = {
     users:{
         data:[]
     }
 }

  constructor(props) {
    super(props);
  }

  componentWillMount(){
      this.props.fetchUsers().then((users,error) =>{
         this.setState({
            users : users.value
          });
      });

  }

  componentDidMount(){

      //console.log(window.innerHeight)
  }

  componentDidUpdate() {
    //不能setState
    //console.log("states:",this.state)
  }

  render() {
   const columns = [{
      title: '姓名',
      dataIndex: 'name',
      render: text => <a href="#">{text}</a>,
    }, {
      title: 'email',
      dataIndex: 'email',
    }, {
      title: '角色',
      dataIndex: 'roles',
    }, {
            title: "创建时间",
            dataIndex: "created_at",
            key: "created_at",
            sorter: true,
            filterDropdown: <DateTimeFilterDropdown columnKey={"created_at"}/>,
            render:function(value){
                 return value;
            }
          },
          {
            title: '操作',
            key: 'operation',
            render: (text, record) => (
              <ButtonGroup>
                <Popconfirm title="确认要删除么?" onConfirm={()=>onDelete(record.id)}>
                <Button>Delete</Button>
                </Popconfirm>
                <Button >编辑</Button>
              </ButtonGroup>
            )
          }
    ];


      function onDelete(recordId){

      }



      const pagination = {
          total: this.state.users.data.length,
          showSizeChanger: true,
          onShowSizeChange: (current, pageSize) => {
            console.log('Current: ', current, '; PageSize: ', pageSize);
          },
          onChange: (current) => {
            console.log('Current: ', current);
          },
        };

      return(
       <Table columns={columns} dataSource={this.state.users.data} pagination={pagination} />
      )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersPage);
