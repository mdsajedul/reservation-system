import { Card, CardHeader, CardBody, Typography, Avatar, Button, } from "@material-tailwind/react";
import { useGetHotelByIdQuery, useGetHotelsQuery, useGetRoomsByHotelIdMutation } from "@/features/hotels/hotelsApi";
import { EyeIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
  
  export function ViewHotel() {

    let {id} = useParams()
    const {isError, isLoading, data} = useGetHotelByIdQuery(id)
    const [getRoomsByHotelId] = useGetRoomsByHotelIdMutation()

    useEffect(()=>{
        getRoomsByHotelId(data?._id)
    },[data])


    let agentDetailsContent;
    if(data?.agentDetails===null){
        agentDetailsContent = <div>
            <p className="text-center">Agent ID: {data?.agentId}</p>
            <p className="text-red-500 text-center">Agent details not found!</p>
        </div>
    }else{
        agentDetailsContent = 
        <div>
            <h3 className="text-xl">Agent Details</h3>
            <p>{data?.agentDetails?.fullname}</p>
            <p>Email: {data?.agentDetails?.contactInfo?.email}</p>
            <p>Phone: {data?.agentDetails?.contactInfo?.phone}</p>
        </div>
    }

    let tableContent;
    if(isLoading){
        tableContent = <div>Loading...</div>
    }else if(isError){
        tableContent = <div>Error</div>
    }else if(data){
        tableContent = 
        <div className="px-10 py-5">
            <div className="flex justify-between">
                <div>
                    <h3 className="text-xl font-semibold">{data?.hotelName}</h3>
                    <p>Phone: {data?.contactInformation?.phone?.map((num,index,ar)=>`${num} ${ar.length-1===index?'':','} `)}</p>
                    <p>Email: {data?.contactInformation?.email?.map((em,ar)=>`${em}, `)}</p>
                    <p>{`${data?.location?.address}, City: ${data?.location?.city}, State: ${data?.location?.state}, ${data?.location?.country}`}</p>
                </div>
                <div>
                    {agentDetailsContent}
                </div>
            </div>
            <hr  className="my-4"/>
            <div className="grid grid-cols-3">
                <div className="col-span-2">
                    <p>
                        {data?.description?.overview}
                    </p>
                </div>
                <div className="col-span-1">
                    <table>
                        <tr>
                            <td>Available:</td>
                            <td>{data?.availability===true?'Yes':'No'}</td>
                        </tr>
                        <tr>
                            <td>Check In Time:</td>
                            <td>{data?.checkInTime}</td>
                        </tr>
                        <tr>
                            <td>Check Out Time:</td>
                            <td>{data?.checkOutTime}</td>
                        </tr>
                        <tr>
                            <td>Room Type:</td>
                            <td>{data?.roomType?.map((type,index,array)=>`${type}${array.length-1 === index? '':','} `)}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <hr />

        </div>
    }



    return (
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card>
          <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
            <div className="flex justify-between">
                <Typography variant="h6" color="white">
                Hotels
                </Typography>
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
  
  export default ViewHotel;
  