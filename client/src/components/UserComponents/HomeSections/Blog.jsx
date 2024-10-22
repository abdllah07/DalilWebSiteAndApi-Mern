import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import {   Calendar, Heart, Rss, User } from 'lucide-react'
import PropTypes from 'prop-types';
function Blog({product}) {
  return (
    <Card className="w-full max-w-sm mx-auto  duration-500 hover:bg-gray-100  shadow-lg hover:-translate-y-3 cursor-pointer mb-2">

    <div className="" >
        <div className="relative">
            <img src={product?.image} alt={product?.title} className="w-full h-[300px] object-cover rounded-t-lg " />
                <Badge className="absolute bottom-2 left-2 bg-secondary  flex gap-3 group">
                    <Heart className="text-primary w-5 h-5 group-hover:text-secondary"/>
                </Badge>
                <Badge className="absolute text-primary bottom-2 right-2 bg-secondary  flex gap-3 group">
                    <Rss className="text-primary w-3 h-3 group-hover:text-secondary"/>
                    <h2 className="text-primary group-hover:text-secondary">{product?.category}</h2>
                </Badge>
        </div>
        <CardContent className="p-4 ">
            <h2 className="text-xl text-secondary font-bold mb-2">{product?.title}</h2>
            <p className='line-clamp-2'>{product?.content}</p>
        </CardContent>
        <CardFooter className="flex justify-between border-t mt-1 pt-3">
            <div className="flex justify-between items-center mb-2 gap-2">
                <User className='size-5'/>
                <span className="text-md text-secondary font-bold ">{product?.author}</span>
            </div>
            <div className="flex justify-between items-center mb-2 gap-2">
                <Calendar className='size-5'/>
                <span className="text-md text-secondary font-bold ">{product?.date}</span>
            </div>
        </CardFooter>
    </div>

</Card>    )
}

Blog.propTypes = {
    product : PropTypes.object
}
export default Blog