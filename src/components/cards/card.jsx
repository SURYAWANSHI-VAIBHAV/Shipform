import React from 'react';
import th from '@/public/images/th.jpg'; // Keeping the image the same as requested
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

function TempleteCard({ id, title, description, formLink }) {
  return (
    <div className="card bg-base-100 w-80 shadow-xl" key={id}>
      <figure>
        <img src={th.src} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <div className="flex gap-4">
          <Link href={formLink}>
            <button className="btn text-blue-500 border-blue-500 rounded-full">
              View More
            </button>
          </Link>
          <Link href={formLink}>
            <button className="btn bg-blue-600 border-blue-500 text-white rounded-full">
              Create a Form
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TempleteCard;
