import Mutil from 'util/mm.jsx';
const _mm=new Mutil();
class User{
    login(loginInfo){
        return _mm.request({
            type:'post',
            url:'/manage/user/login.do',
            data:loginInfo
          })
    }
}
export default User;