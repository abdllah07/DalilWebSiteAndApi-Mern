import { Card, CardHeader } from '@/components/ui/card';
import PropTypes from 'prop-types';
function Category({ Category }) {
    return (
        <Card className="border-none shadow-2xl bg-secondary text-primary font-bold mx-auto w-[300px] h-[150px] md:w-[250px] md:h-[250px] flex items-center justify-center cursor-pointer hover:bg-green-800 duration-500">
            <CardHeader className="flex flex-col justify-center items-center text-center">
                {Category.icon && (
                    <Category.icon className="text-[#F1F1F1] text-[18px] md:text-[20px] font-extrabold size-10" />
                )}
                <h2 className="text-[18px] md:text-[20px] sm:text-[12px]">{Category?.name}</h2>
            </CardHeader>
        </Card>
    );
}


Category.propTypes = {
    Category : PropTypes.object
}
export default Category;
