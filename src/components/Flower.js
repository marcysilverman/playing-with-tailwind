import React from 'react';


function Flowers() {
  return (
    <>
    <div class="flex justify-center">
    <div class="max-w-xs rounded overflow-hidden shadow-lg">
      <img class="w-full" src="../../images/flower1.jpg" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Winter Florals</div>
        <p class="text-grey-darker text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div class="px-6 py-4">
        <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#florals</span>
        <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#color</span>
        <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">#winter</span>
      </div>
    </div>
    </div>
    </>
  )
}

export default Flowers;