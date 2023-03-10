import { useFormik } from 'formik';
import * as Yup from 'yup';

import Button from '@components/common/Button';
import Input from '@components/common/Input';
import PostSignupLayout from '@layouts/PostSignupLayout';
import TagsPicker from '@/components/common/TagsPicker';

interface IFormik {
	bio: string;
	hobbies: string[];
	lifeGoal: string;
}

const PostSignupPage3 = (): JSX.Element => {
	const formik = useFormik<IFormik>({
		initialValues: {
			bio: '',
			hobbies: [],
			lifeGoal: '',
		},
		validationSchema: Yup.object({}).shape({
			bio: Yup.string().required('Это обязательное поле'),
		}),
		onSubmit: () => window.location = 'https://invoke.one/' as any,
	});

	return (
		<PostSignupLayout 
			activeStep={2} 
			onSkip={() => undefined}
			onRouteBack={() => undefined}
		>
			<div className='mt-10 px-28'>
				<h1 className='text-heading-1 mt-3'>
					Интересы
				</h1>
				<form onSubmit={formik.handleSubmit} className='mt-6 grid gap-[14px] max-w-[420px]'>
					<Input
						placeholder='О себе'
						name='bio'
						onChange={formik.handleChange}
						value={formik.values.bio}
						errorMessage={formik.submitCount ? formik.errors.bio : undefined} />

					<TagsPicker
						placeholder='Хобби'
						tags={formik.values.hobbies}
						onDeleteTag={(tagId) => formik.values.hobbies.splice(tagId, 1)}
						setTags={(newTag) => formik.setFieldValue('hobbies', formik.values.hobbies.concat([newTag]))} />

					<Input 
						placeholder='Жизненные ориентиры (цель по жизни)'
						name='lifeGoal'
						onChange={formik.handleChange}
						value={formik.values.lifeGoal}
						errorMessage={formik.submitCount ? formik.errors.lifeGoal : undefined} />
					
					<Button variant='filled' color='black'>
						Продолжить
					</Button>
				</form>
			</div>
		</PostSignupLayout>
	);
};

export default PostSignupPage3;
