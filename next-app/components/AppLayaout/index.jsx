import 'bootswatch/dist/yeti/bootstrap.min.css'
// import styles from '../styles/styles.main.css';
function AppLayout({ children }) {
    return (
        <>
            <main>
                {children}

            </main>

            <style jsx global>{`
                html,
                body {
                    background-color: beige;
                    font-size: 25px
                }
            `}
            </style>
        </>
    )
}
export default AppLayout;
