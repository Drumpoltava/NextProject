import LeftBar from "@/components/menu/LeftBar"
import MobileMenu from "@/components/menu/MobileMenu";
export default function DefaultLayout({children}) {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='d-none d-sm-none d-md-block col-md-2'>
                    <LeftBar/>
                </div>
                <div className='col-12 col-sm-12 col-md-10'>
                    <div className="d-block d-sm-block d-md-none">
                        <MobileMenu/>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
}