import { Box, Button, Container, Heading, Image, Text, useToast } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const courses = [
  { id: 1, title: "Course Title 1", description: "Detailed description of the course.", image: "https://via.placeholder.com/300" },
  { id: 2, title: "Course Title 2", description: "Detailed description of the course.", image: "https://via.placeholder.com/300" },
  { id: 3, title: "Course Title 3", description: "Detailed description of the course.", image: "https://via.placeholder.com/300" },
];

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = courses.find(c => c.id === parseInt(courseId));
  const toast = useToast();

  const handleEnroll = () => {
    toast({
      title: "Enrollment Successful",
      description: `You have successfully enrolled in ${course.title}.`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  if (!course) {
    return <Text>Course not found</Text>;
  }

  return (
    <Container maxW="container.md" py={20}>
      <Image src={course.image} alt={course.title} mb={6} />
      <Heading as="h2" size="xl" mb={4}>{course.title}</Heading>
      <Text fontSize="lg" mb={6}>{course.description}</Text>
      <Button colorScheme="blue" onClick={handleEnroll}>Enroll</Button>
    </Container>
  );
};

export default CourseDetail;