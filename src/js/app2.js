// setTimeout(() => {
//   new Vue({
//     el: 'main',
//     data: {
//       message: 'I am ready',
//       complexData: Array.from({length: 100}, () => Math.floor(Math.random() * 100))
//     }
//   })
// }, 0)

setTimeout(() => {
  let data = Array.from({length: 3000}, () => Math.floor(Math.random() * 100))
  let stringTemplate = data.map(num => {
    return `<li class="list-group-item"><span class="text-dark">${num}</span></li>`
  }).join('')
  let frag = document.createDocumentFragment()
  let ul = document.createElement('ul')
  ul.classList.add('list-group')
  ul.innerHTML = stringTemplate
  frag.appendChild(ul)

  document.querySelector('main').appendChild(frag)
  document.getElementById('itemCount').textContent = data.length
})


const longText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ratione incidunt optio, obcaecati! Veniam totam repellat vitae pariatur quis in voluptate hic at, eius tenetur iste ducimus quos nemo officia neque fugiat doloribus. Nobis ducimus unde, voluptatum eaque molestiae aperiam libero consectetur, voluptatem incidunt, nam deleniti maxime. Hic, molestiae repudiandae facere vero accusantium dolor aliquam, omnis eaque officia nemo quibusdam reiciendis velit fugit aliquid exercitationem, totam tempore recusandae itaque mollitia sequi dolorum sed sunt. Voluptatum aspernatur maxime odio, quae praesentium, ratione architecto ipsam numquam optio facilis quidem sequi dolores doloremque error hic magni eveniet ut iure tempore quis inventore veritatis! Quasi rerum repudiandae, distinctio nesciunt. Eveniet dolore, molestias perferendis placeat veniam dolorum, voluptate esse amet deleniti, asperiores ipsum dolores a! Fuga repellat dolorem cum sint at nesciunt sit perspiciatis quaerat praesentium aperiam soluta asperiores est, excepturi accusamus, aspernatur illo illum. Pariatur natus, ut maxime minus aliquid ipsam vitae quisquam unde molestias vero temporibus possimus explicabo praesentium nobis impedit, laudantium, minima cum quos. Beatae repudiandae, voluptas laboriosam. Ex quasi hic, aliquid. Rem vero culpa minima enim beatae. Dolor corporis nemo recusandae magni ducimus itaque quaerat velit consequuntur veniam at eligendi temporibus enim nobis provident ullam aliquid a unde accusamus beatae quisquam, iusto similique sunt. Dolores, odit! Rerum cum consequatur quae exercitationem odit facere iusto in quasi repudiandae enim, magni neque. Maxime harum voluptatum rerum minima rem soluta, molestias culpa quo libero suscipit totam. Earum magni architecto, consequuntur corporis totam reprehenderit beatae saepe ullam officia quidem fugiat eaque voluptates, a accusantium veniam necessitatibus quasi ad voluptatem adipisci qui expedita, repellendus dolorem velit harum incidunt. Similique blanditiis repellendus nesciunt sapiente expedita, et illo libero debitis soluta odio tenetur delectus, quisquam rem repellat sunt. Nemo expedita nam, rerum corporis, ipsa alias voluptatum facilis neque non esse blanditiis possimus iusto laudantium dignissimos modi culpa deserunt beatae commodi aliquid doloribus, ullam quod. Assumenda dolor impedit neque distinctio accusamus, sed commodi illo, sunt unde ad fuga ex veritatis est suscipit laborum similique quidem quia quas aut eligendi corporis doloribus quo vel, nobis. Reprehenderit blanditiis, porro dolore! Distinctio nam ullam ipsa iure non minima iste cum excepturi sit, error. Minima nemo est temporibus dolorum, amet ipsum debitis eveniet accusantium asperiores, eius ipsa quibusdam suscipit doloremque voluptas accusamus aperiam, hic officiis. Repellat harum quisquam nemo, quos voluptatum minus id, modi enim in dolore ad beatae laborum obcaecati. Ducimus fuga delectus, ipsam eveniet molestias unde itaque porro excepturi veritatis architecto.`