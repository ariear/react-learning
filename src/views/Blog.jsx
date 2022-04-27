import { useState } from "react";
import { Link } from "react-router-dom";

function Blog() {
      const [article] = useState([
          {
            nama: 'Afakah Gweh Bilek?',
            slug: 'afakah-gweh-bilek?'
          },
          {
            nama: 'Ril Cuy',
            slug: 'ril-cuy'
          },
          {
            nama: 'Kisah haru pak Ambatukam',
            slug: 'kisah-haru-pak-ambatukam'
          },
          {
            nama: 'Top list Waifu Lonet',
            slug: 'top-list-waifu-lonet'
          },
      ])
    
    return (
        <div className="font-pupylinux p-5">
            <p className="font-semibold text-3xl mb-3">Ini Page Blog</p>
            <ul>
                {
                    article.map(e => 
                        <li className="text-blue-400" key={e.slug}><Link to={`/blog/${e.slug}`}>{e.nama}</Link></li>
                    )
                }
            </ul>
        </div>
    )
}

export default Blog;