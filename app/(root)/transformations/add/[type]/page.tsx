import Header from "@/components/shared/Header"
import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constants"
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const AddTransformationsPage = async({ params: { type } }: SearchParamProps) => {
  const transformationType = transformationTypes[type];
  const { userId } = auth();
  if (!userId) {
    return redirect('/sign-in');
  }
  const user = await getUserById(userId);
  console.log(user)
  return (
    <>
      <Header
        title={transformationType.title}
        subtitle={transformationType.subTitle}
      />
      <TransformationForm
        action="Add"
        userId={user._id}
        type={transformationType.type as TransformationTypeKey}
        creditBalance={user.creditBalance}

      />
    </>
  )
}

export default AddTransformationsPage