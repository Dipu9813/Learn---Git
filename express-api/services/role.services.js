import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createRole = async (req) =>{
    const {name, permission}= req.body;
    const refinedPermissions = permission.map((p)=>{return{id:p}});
    const result = await prisma.role.create({
        data:{
            name,
            permission:{
                connect:refinedPermissions
            }
        }
    })
    return result;
}

export {createRole}