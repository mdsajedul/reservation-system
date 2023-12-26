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
  import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
  import { authorsTableData, projectsTableData } from "@/data";
import { useGetUsersQuery } from "@/features/users/usersApi";
import { EyeIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
  
  export function Users() {

    const {isError, isLoading, data} = useGetUsersQuery()
    let tableContent;
    if(isLoading){
        tableContent = <div>Loading...</div>
    }else if(isError){
        tableContent = <div>Error</div>
    }else if(data.length>0){
        tableContent = <table className="w-full min-w-[640px] table-auto">
        <thead>
          <tr>
            {["user", "Role", "Profile", "email", "phone", "Action"].map((el) => (
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
          {data.map(( user,index,array ) => {
              const className = `py-3 px-5 ${
                index === array.length - 1
                  ? ""
                  : "border-b border-blue-gray-50"
              }`;

              return (
                <tr key={index}>
                  <td className={className}>
                    <div className="flex items-center gap-4">
                      <Avatar src={user?.profile?.profileImage} alt={name} size="sm" />
                      <div>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-semibold"
                        >
                          {user?.username}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {user?.profile?.fullname}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className={className}>
                    <Typography className="text-xs font-semibold text-blue-gray-600">
                      {user?.roles?.map((r)=>r)}
                    </Typography>
                  </td>
                  <td className={className}>
                    <Typography className="text-xs font-semibold text-blue-gray-600">
                      {user?.profile? 'YES':'N/A'}
                    </Typography>
                  </td>
                  <td className={className}>
                    <Typography className="text-xs font-semibold text-blue-gray-600">
                      {user?.email?user?.email:'N/A'}
                    </Typography>
                  </td>
                  <td className={className}>
                    <Typography className="text-xs font-semibold text-blue-gray-600">
                      {user?.profile?.contactInfo?.phone?user?.profile?.contactInfo?.phone:'N/A'}
                    </Typography>
                  </td>
                  <td className={`${className} flex`}>
                      <Button
                         
                          variant="text"
                          color="red"
                          className="hidden items-center gap-1 px-4 xl:flex"
                          >
                          <EyeIcon className="h-5 w-5 text-blue-500" />
                      </Button>
                      <Button
                         
                          variant="text"
                          color="red"
                          className="hidden items-center gap-1 px-4 xl:flex"
                          >
                          <PencilSquareIcon className="h-5 w-5 text-orange-500" />
                      </Button>
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
            <Typography variant="h6" color="white">
              Users Table
            </Typography>
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
  
  export default Users;
  