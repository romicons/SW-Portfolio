export const MainContainer = ({children}) => {
    return(
        <main className="bg-dark text-light flex flex-col justify-between">
            {children}
        </main>
    )
};
