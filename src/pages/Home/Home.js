import s from './Home.module.css'

function Home() {
    return (
        <div className={s.box}>
            <h3 className={s.title}>Welcome to the phone book!</h3>
            <p className={s.text}>Before you start, please login or register</p>
            </div>
)
};

export default Home;