import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";

const ClassCard = () => {
  return (
    <Card className="w-12">
      <CardHeader color="blue" className="relative h-1/2">
        <img
          src={require('../assets/images/logo.png')}
          alt="img-blur-shadow"
          className="h-full w-full"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          JavaScript Course
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum est beatae pariatur maiores consequuntur. Perspiciatis explicabo porro nihil. Hic, quae?
        </Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small">Creator of this</Typography>
        <Typography variant="small" color="gray" className="flex gap-1">
          <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
          Rating...
        </Typography>
      </CardFooter>
    </Card>
  )
}

export default ClassCard