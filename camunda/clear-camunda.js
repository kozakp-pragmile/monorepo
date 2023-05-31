async function deleteResource(url) {
  const processInstances = await fetch(url)
  const json = await processInstances.json();
  const ids = json
    .map(instance => instance.id);
  for (let i = 0; i < ids.length; i++) {
    const idUrl = url + '/' + ids[i];
    console.log(`Deleting resource ${idUrl}`)
    await fetch(idUrl, {
      method: 'DELETE',
    });
  }
}

async function deleteEverything() {
  await deleteResource('http://localhost:10000/engine-rest/process-instance');
  await deleteResource('http://localhost:10000/engine-rest/history/process-instance');
  await deleteResource('http://localhost:10000/engine-rest/process-definition');
  await deleteResource('http://localhost:10000/engine-rest/deployment');
}

deleteEverything()
  .then(() => console.log('Completed'))
  .catch(e => console.error(e))
