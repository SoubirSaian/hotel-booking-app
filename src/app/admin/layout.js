import AdminNavbar from "@/components/Admin/AdminNavbar";
import Sidebar from "@/components/Admin/Sidebar";


export default function AdminLayout({children}){
    return (
    
        
            <div className="flex flex-col">
                <AdminNavbar/>
                <div className="flex h-full">

                    <Sidebar/>
                </div>
                {children}
            </div>
        
    )
}