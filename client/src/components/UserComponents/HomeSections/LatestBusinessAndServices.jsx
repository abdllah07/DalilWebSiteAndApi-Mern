import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import {   Ban, CheckCheck,  Heart } from 'lucide-react'
import PropTypes from 'prop-types';
function LatestBusinessAndServices({product}) {
    return (
    <Card className="w-full max-w-sm mx-auto  duration-500 hover:bg-gray-100  shadow-lg hover:-translate-y-3 cursor-pointer mb-2">

    <div className="" >
        <div className="relative">
            <img src={product?.images} alt={product?.title} className="w-full h-[300px] object-cover rounded-t-lg " />
                <Badge className="absolute bottom-2 left-2 bg-secondary  flex gap-3 group">
                    <Heart className="text-primary w-5 h-5 group-hover:text-secondary"/>
                </Badge>
        </div>
        <CardContent className="p-4 ">
            <h2 className="text-xl text-secondary font-bold mb-2">{product?.title}</h2>
        </CardContent>
        <CardFooter className="flex justify-between border-t mt-1 pt-3">
            <div className="flex justify-between items-center mb-2">
                <span className="text-md text-secondary font-bold ">{product?.category}</span>
            </div>
            <div className="flex justify-between items-center gap-3 mb-2">
                {product?.open ? <CheckCheck className="text-green-500  size-5" /> : <Ban className="text-red-800  size-5" />}
                <span className={`${product?.open ? "text-secondary" : 'text-red-500'}`}>{product?.open ? "Open" : 'Close'}</span>
            </div>
        </CardFooter>
    </div>

</Card>  
)
}
LatestBusinessAndServices.propTypes = {
    product : PropTypes.object
}
export default LatestBusinessAndServices