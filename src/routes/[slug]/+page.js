import { error } from '@sveltejs/kit';


export async function load({ fetch,params }) {
	try {
        let p=params.slug
        const response = await fetch(`assets/${p}.txt`);
        const fileContent = await response.text();
        const lines = fileContent.split('\n');

      // Extract the first three lines
      const firstLine = lines[0].trim();
      const secondLine = lines[1].trim();
      const thirdLine = lines[2].trim();

      // Extract the rest of the text (excluding the first three lines)
      const restText = lines.slice(4).join('\n').trim();

        return {
          content:restText,
          title:firstLine,
          path:params.slug,
          medium:secondLine,
          size:thirdLine
        };
      } catch (error) {
        console.error('Error during fetch:', error.message);
        return {
          status: 500,
          error: new Error('Failed to fetch file content'),
        };
      }
    }
    // return {path:params.slug}
	// error(404, 'Not found');

