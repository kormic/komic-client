import React from "react";

import parse from "html-react-parser";

import { Post } from "components/Post";
import { Layout } from "components/Layout";
import { SMain } from "components/Layout/Layout";

const mockPost =
  '<h1># TLDR</h1>\n<h2>Linux</h2>\n<p><em>Debian / Ubuntu</em></p>\n<pre style="padding-left: 40px;"><code>sudo apt update &amp;&amp; sudo apt install nodejs npm\n</code></pre>\n<p style="text-align: left;"><em>Arch / Manjaro</em></p>\n<pre style="padding-left: 40px;"><code>sudo pacman -S nodejs npm\n</code></pre>\n<h2>Mac / Windows</h2>\n<ol>\n<li>&Pi;ά&mu;&epsilon; &sigma;&tau;&eta;&nu; &delta;&iota;&epsilon;ύ&theta;&upsilon;&nu;&sigma;&eta; <a href="https://nodejs.org/en/">https://nodejs.org/en/</a></li>\n<li>&Kappa;&alpha;&tau;&epsilon;&beta;ά&zeta;&omicron;&upsilon;&mu;&epsilon; &tau;&omicron;&nu; installer &gamma;&iota;&alpha; &tau;&omicron; &lambda;&epsilon;&iota;&tau;&omicron;&upsilon;&rho;&gamma;&iota;&kappa;ό &mu;&alpha;&sigmaf;</li>\n<li>&Tau;&rho;έ&chi;&omicron;&upsilon;&mu;&epsilon; &tau;&omicron;&nu; installer &kappa;&alpha;&iota; &alpha;&kappa;&omicron;&lambda;&omicron;&upsilon;&theta;&omicron;ύ&mu;&epsilon; &tau;&alpha; &beta;ή&mu;&alpha;&tau;&alpha;</li>\n</ol>\n<h2>NVM</h2>\n<h2>Mac / Linux</h2>\n<ul>\n<li>&Alpha;&nu;&omicron;ί&gamma;&omicron;&upsilon;&mu;&epsilon; έ&nu;&alpha; &tau;&epsilon;&rho;&mu;&alpha;&tau;&iota;&kappa;ό &kappa;&alpha;&iota; &pi;&lambda;&eta;&kappa;&tau;&rho;&omicron;&lambda;&omicron;&gamma;&omicron;ύ&mu;&epsilon; <strong>&mu;ί&alpha; &alpha;&pi;ό &tau;&iota;&sigmaf; &delta;ύ&omicron; &epsilon;&nu;&tau;&omicron;&lambda;έ&sigmaf;</strong> (&alpha;&nu;ά&lambda;&omicron;&gamma;&alpha; &mu;&epsilon; &tau;&omicron; &alpha;&nu; έ&chi;&omicron;&upsilon;&mu;&epsilon; &epsilon;&gamma;&kappa;&alpha;&tau;&epsilon;&sigma;&tau;&eta;&mu;έ&nu;&omicron; &tau;&omicron; <em>Curl</em> ή &tau;&omicron; <em>Wget</em>)</li>\n</ul>\n<pre style="padding-left: 40px;"><code># &Mu;&epsilon; curl\ncurl -o- &lt;https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh&gt; | bash\n\n# &Mu;&epsilon; wget\nwget -qO- &lt;https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh&gt; | bash\n</code></pre>\n<ul>\n<li>&Kappa;&lambda;&epsilon;ί&nu;&omicron;&upsilon;&mu;&epsilon;';

const PostById = () => {
  const parsedPost = parse(mockPost);

  return (
    <Layout>
      <SMain>
        <Post>{parsedPost}</Post>
      </SMain>
    </Layout>
  );
};

export default PostById;
