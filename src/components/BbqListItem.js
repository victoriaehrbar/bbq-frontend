import React from "react";

export default function BbqListItem({ bbq }) {
  return (
    <div>
      {bbq.name} - {bbq.rating}
    </div>
  );
}
