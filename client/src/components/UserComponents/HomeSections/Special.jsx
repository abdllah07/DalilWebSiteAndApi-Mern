import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import {   Heart, Link, Zap } from 'lucide-react'
import PropTypes from 'prop-types';
function Special({product}) {
    return (
            <Card className="w-full max-w-sm mx-auto  duration-500 hover:bg-gray-100  shadow-lg hover:-translate-y-3 cursor-pointer mb-2">

                <div className="" >
                    <div className="relative">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt={product?.title} className="w-full h-[300px] object-cover rounded-t-lg" />
                            <Badge className="absolute top-2 right-2 bg-secondary group">
                                <Link className="text-primary group-hover:text-secondary"/>
                            </Badge>
                            <Badge className="absolute bottom-2 right-2 bg-secondary  flex gap-3 group">
                                <Zap className="text-primary w-3 h-3 group-hover:text-secondary"/>
                                <h2 className="text-primary group-hover:text-secondary">Faster Shipping</h2>
                            </Badge>
                            <Badge className="absolute bottom-2 left-2 bg-secondary  flex gap-3 group">
                                <Heart className="text-primary w-5 h-5 group-hover:text-secondary"/>
                            </Badge>
                    </div>
                    <CardContent className="p-4">
                        <h2 className="text-xl text-secondary font-bold mb-2">{product?.title}</h2>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-secondary ">{product?.category}</span>
                        </div>
                    </CardContent>
                </div>
    
        </Card>

    )
}
Special.propTypes = {
    product : PropTypes.object
}
export default Special