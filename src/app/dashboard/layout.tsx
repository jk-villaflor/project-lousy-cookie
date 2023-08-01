// export const metadata: Metadata = {
//   title: 'Dashboard',
//   description: 'Dashboard',
// }

export default function DashboardLayout({children,} : {
    children: React.ReactNode
}){
    return(
        <section>
            <nav></nav>
            {children}
        </section>
    )
}