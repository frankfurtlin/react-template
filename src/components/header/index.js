import './header.less'

function Header(props){

    //接收来自父组件的数据
    const {title, info} = props

    //如果info存在，则执行info()
    info && info()

    return <div className='M-header'>Header:{title}</div>
}

export default Header