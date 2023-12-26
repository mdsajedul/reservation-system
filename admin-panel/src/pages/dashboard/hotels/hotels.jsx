import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    Chip,
    Tooltip,
    Progress,
    Button,
  } from "@material-tailwind/react";
import { useGetHotelsQuery } from "@/features/hotels/hotelsApi";
import { EyeIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
  
  export function Hotels() {

    const {isError, isLoading, data} = useGetHotelsQuery()
    let tableContent;
    if(isLoading){
        tableContent = <div>Loading...</div>
    }else if(isError){
        tableContent = <div>Error</div>
    }else if(data.length>0){
        tableContent = <table className="w-full min-w-[640px] table-auto">
        <thead>
          <tr>
            {["Hotels", "Address", "Contact Info", "At service", "Actions"].map((el) => (
              <th
                key={el}
                className="border-b border-blue-gray-50 py-3 px-5 text-left"
              >
                <Typography
                  variant="small"
                  className="text-[11px] font-bold uppercase text-blue-gray-400"
                >
                  {el}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(( hotel,index,array ) => {
              const className = `py-3 px-5 ${
                index === array.length - 1
                  ? ""
                  : "border-b border-blue-gray-50"
              }`;

              return (
                <tr key={index}>
                  <td className={className}>
                    <div className="flex items-center gap-4">
                      <Avatar src={hotel?.images[0]} alt={name} size="sm" />
                      <div>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-semibold"
                        >
                          {hotel?.hotelName}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className={className}>
                    <Typography className="text-xs font-semibold text-blue-gray-600">
                      {`Address: ${hotel?.location?.address},`} <br />
                      {`${hotel?.location?.city}, ${hotel?.location?.state}, ${hotel?.location?.country}`}
                    </Typography>
                  </td>
                  <td className={className}>
                    <Typography className="text-xs font-semibold text-blue-gray-600">
                        {`Phone: ${hotel?.contactInformation?.phone},`} <br />
                        {`Email: ${hotel?.contactInformation?.email}`}
                    </Typography>
                  </td>
                  <td className={className}>
                    <Typography className="text-xs font-semibold text-blue-gray-600">
                        {hotel?.availability===true?'YES':'NO'}
                    </Typography>
                  </td>
                  <td className={`${className} flex`}>
                    <NavLink to={`/dashboard/hotels/${hotel?._id}`}>
                      <Button
                          
                          variant="text"
                          color="red"
                          className="hidden items-center gap-1 px-4 xl:flex"
                          >
                          <EyeIcon className="h-5 w-5 text-blue-500" />
                      </Button>
                    </NavLink>
                    <NavLink to={`/dashboard/hotels/update/${hotel?._id}`}>
                      <Button
                         variant="text"
                         color="red"
                         className="hidden items-center gap-1 px-4 xl:flex"
                         >
                         <PencilSquareIcon className="h-5 w-5 text-orange-500" />
                     </Button>
                    </NavLink>
                     
                      <Button
                         
                          variant="text"
                          color="red"
                          className="hidden items-center gap-1 px-4 xl:flex"
                          >
                          <TrashIcon className="h-5 w-5 text-red-500" />
                      </Button>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    }

    return (
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card>
          <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
            <div className="flex justify-between">
                <Typography variant="h6" color="white">
                Hotels
                </Typography>
                <NavLink to={'/dashboard/hotels/add'}>
                  <Button  variant="filled"  color="blue-gray">
                      + Add New
                  </Button>
                </NavLink>
               
            </div>

          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            {
                tableContent
            }
          </CardBody>
        </Card>
      </div>
    );
  }
  
  export default Hotels;
  