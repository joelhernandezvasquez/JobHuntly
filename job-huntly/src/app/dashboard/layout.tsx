
interface Props{
  children:React.ReactNode
}

export default function DashbardLayout({children}:Props) {
    return (
    
       <main>
       {children}
     </main>
     
    )
  }
  