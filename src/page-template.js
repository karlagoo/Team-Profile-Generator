module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <header>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Meet The Team</h1>
            </div>
        </div>
    </header>

    <div class="container">
        <div class="row">
            <div class="main-section col-12 d-flex justify-content-center">

                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${answers.managerName}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Title: Manager</h6>
                        <p>
                            <li>ID: ${answers.managerId}</li>
                            <li>Office Number: ${answers.officeNumber}</li>
                            <li><a href="mailto:${answers.managerEmail}" class="card-link">${answers.managerEmail}</a></li>
                        </p>
                    </div>
                </div>



                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${answers.engineerName}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Title: Engineer</h6>
                        <p>
                            <li>ID: ${answers.engineerId}</li>
                            <li><a href="mailto:${answers.engineerEmail}" class="card-link">${answers.engineerEmail}</a></li>
                            <li><a href="http://github.com/${answers.github}" class="card-link">https://github.com/${answers.github}</a></li>

                        </p>
                    </div>
                </div>

                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${answers.internName}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Title: Intern</h6>
                        <p>
                            <li>ID: ${answers.internId}</li>
                            <li>School: ${answers.school}</li>
                            <li><a href="mailto:${answers.internEmail}" class="card-link">${answers.internEmail}</a></li>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>

</body>

</html>`
}