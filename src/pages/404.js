import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
	<Layout label="404">
		<SEO title="404" />
		<div className="max-w-4xl mx-auto w-4/5 md:w-3/5 mt-48 mb-40 font-serif text-center">
			<h2 className="font-serif font-bold text-3xl md:text-4xl xl:text-5xl leading-tight mb-8">
				You Found A Page That Doesn't Exist!
			</h2>
			<Link to="/" className="btn btn--primary w-full md:w-auto mb-4 md:mb-0 md:mr-8">
				Go to homepage
			</Link>
		</div>
	</Layout>
);

export default NotFoundPage;
