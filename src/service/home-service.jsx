import Mutil from 'util/mm.jsx';
const _mm=new Mutil();
class Home{
    getHomeCount(){
        return _mm.request({
            type:'get',
            url:'/manage/statistic/base_count.do',
          })
    }
}
export default Home;