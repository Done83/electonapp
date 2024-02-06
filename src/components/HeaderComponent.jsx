// icons
import { CiLocationOn, CiDeliveryTruck } from 'react-icons/ci';

function HeaderComponent() {
    return (
        <div>
            <div className='header-main'>
                <div className='text-center p-1'>
                    <p>Need help? Call us: (+98) 0234 456 789</p>
                </div>
                <div className='flex gap-3 justify-center p-1'>
                    <div className='icons-flex'>
                        <CiLocationOn />
                        <span>Our Store</span>
                    </div>
                    <div className='icons-flex'>
                        <CiDeliveryTruck />
                        <span>Track your Order</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HeaderComponent;
